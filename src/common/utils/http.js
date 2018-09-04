/**
 * Handles HTTP Jobs
 */

const DEFAULT_TIMEOUT = 60; // seconds
const ERROR_STATUS_CODE = 400;
const rp = require('request-promise');
const stringUtil = require('../utils/string');
const typeOf = require('../utils/typeOf');

module.exports = {

    /**
     * Asynchronous HTTP GET call
     * @param {String} url 
     * @param {Map<String, String>} headers 
     * @param {Number} timeoutInSeconds 
     */
    get: async function (url, headers, timeoutInSeconds = DEFAULT_TIMEOUT) {

        if (stringUtil(url).isEmpty()) {
            return createResponse(ERROR_STATUS_CODE, null, "No Url found");
        } else if (typeOf(url).isnt('string')) {
            return createResponse(ERROR_STATUS_CODE, null, "Url must be of type String");
        }

        if (headers != null && typeOf(headers).isnt('map')) {
            return createResponse(ERROR_STATUS_CODE, null, "headers must be of type map");
        }

        if (timeoutInSeconds != null && typeOf(timeoutInSeconds).isnt('number')) {
            return createResponse(ERROR_STATUS_CODE, null, "timeoutInSeconds must be of type Number");
        }

        const options = {
            uri: url,
            headers: headers,
            method: 'GET',
            strictSSL: false,
            json: true,
            resolveWithFullResponse: true,
            timeout: timeoutInSeconds * 1000 // converting to milliseconds
        };

        try {
            const response = await rp(options);
            return createResponse(response.statusCode, response.body, response.error);
        } catch (error) {
            let errorResponseBody = null;
            try {
                errorResponseBody = error.response.body;
            } catch (err) {
                
            }
            return createResponse(error.statusCode, errorResponseBody, error);
        }
    },
    /**
     * Asynchronous HTTP POST call
     * @param {String} url 
     * @param {Map<String, String>} headers 
     * @param {String} body 
     * @param {Number} timeoutInSeconds 
     */
    post: async function (url, headers, body, timeoutInSeconds = DEFAULT_TIMEOUT) {

        if (stringUtil(url).isEmpty()) {
            return createResponse(ERROR_STATUS_CODE, null, "No Url found");
        } else if (typeOf(url).isnt('string')) {
            return createResponse(ERROR_STATUS_CODE, null, "Url must be of type String");
        }

        if (headers != null && typeOf(headers).isnt('map')) {
            return createResponse(ERROR_STATUS_CODE, null, "headers must be of type map");
        }

        if (body != null && typeOf(body).isnt('map')) {
            return createResponse(ERROR_STATUS_CODE, null, "body must be of type map");
        }

        if (timeoutInSeconds != null && typeOf(timeoutInSeconds).isnt('number')) {
            return createResponse(ERROR_STATUS_CODE, null, "timeoutInSeconds must be of type Number");
        }

        const options = {
            url: url,
            headers: headers,
            json: body,
            method: 'POST',
            strictSSL: false,
            resolveWithFullResponse: true,
            timeout: timeoutInSeconds * 1000 // converting to milliseconds
        };

        try {
            const response = await rp(options);
            return createResponse(response.statusCode, response.body, response.error);
        } catch (error) {
            let errorResponseBody = null;
            try {
                errorResponseBody = error.response.body;
            } catch (err) {
                
            }
            return createResponse(error.statusCode, errorResponseBody, error);
        }
    }
}

function createResponse(statusCode, body, error) {

    return {
        statusCode: statusCode,
        body: body,
        error: error
    };
}
