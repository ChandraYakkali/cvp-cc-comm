/**
 * This file takes care of Carrying out the remote operation
 */

const HttpError = require('../../models/HttpError');
const httpConnectionManager = require('../managers/httpConnection');
const stringUtil = require('../utils/string');
const typeOf = require('../utils/typeOf');
const Constants = require('../../constants');

module.exports = {

    /**
     * Perform Remote Operation
     * @param {String} accountDn  
     * @param {String} accessToken
     */
    createWallet: async function (accountDn, accessToken, vaType) {
        
        // Validate Input
        if (stringUtil(operation).isEmpty() ||
            stringUtil(vin).isEmpty() ||
            stringUtil(accountDn).isEmpty() ||
            stringUtil(accessToken).isEmpty() ||
            stringUtil(vaType).isEmpty() ) {

            const httpErrorObj = new HttpError().init(Constants.RESPONSES.CODES.ERROR_REQUEST, "", "");
            return {
                "status": null,
                "httpError": httpErrorObj
            };
        }

        // Creating Request Body
        var requestBody = getBody("operationName", vin);

        // Invoking Http Connection Manager
        const httpResponse = await httpConnectionManager.executeRequestAsync(
            Constants.NETWORK.URL.SEND_REMOTE_OPERATION,
            Constants.NETWORK.HTTP_METHOD.POST,
            null,
            requestBody,
            accessToken,
            accountDn,
            vaType);

        const statusCode = httpResponse.statusCode,
            response = httpResponse.response,
            httpErrorObj = httpResponse.httpError;

        // If httpError is not null, then Api call failed.
        if (httpErrorObj != null) {
            return {
                "status": null,
                "httpError": httpErrorObj
            };
        }

        // If no response, then Api call failed.
        if (response == null || typeOf(response).isnt('object')) {
            const httpErrorObj = new HttpError().init(Constants.RESPONSES.CODES.INVALID_RESPONSE, "", "");
            return {
                "status": null,
                "httpError": httpErrorObj
            };
        }

        // Decode RO Status
        const status = response[Constants.NETWORK.RESPONSE.KEY_STATUS];
        if (stringUtil(status).isEmpty()) {

            // Invalid Response. Creating HttpError object.
            const httpErrorObj = new HttpError().init(Constants.RESPONSES.CODES.INVALID_RESPONSE, "", "");
            return {
                "status": null,
                "httpError": httpErrorObj
            };
        }

        return {
            "status": status,
            "httpError": null
        };
    }
}

function getBody(operation, vin) {

    const requestBody = new Map();
    requestBody[Constants.NETWORK.BODY.KEY_VIN] = vin;
    requestBody[Constants.NETWORK.BODY.KEY_OPERATION] = operation;
    requestBody[Constants.NETWORK.BODY.KEY_FORCED] = "true";

    return requestBody;
}