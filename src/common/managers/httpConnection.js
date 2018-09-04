/**
 * This file exposes a function executeRequest which will add the server related params 
 * and execute the request 
 */
const HTTP = require('../utils/http');
const logger = require('../utils/logger');
const Constants = require('../../constants');
const stringUtil = require('../utils/string');
const typeOf = require('../utils/typeOf');
const HttpError = require('../../models/HttpError');

module.exports = {

    /**
     * Asynchronous HTTP call
     * @param {String} url 
     * @param {String} method
     * @param {Map<String, String>} headerMap 
     * @param {String} body 
     * @param {String} accessToken
     * @param {String} accountDn
     */
    executeRequestAsync: async function (url, method, headerMap, body, accessToken, accountDn, vaType) {

        const headers = getHeader(headerMap, accessToken, accountDn, vaType);

        try {
            logger.info(`URL: ${url}\nMethod: ${method}`);
            logger.info(`Headers: ${JSON.stringify(headers)}`);

            if (body) {
                logger.info(`Body: ${JSON.stringify(body)}`);
            }
            
        } catch (err) {
            
        }
        
        if (method === Constants.NETWORK.HTTP_METHOD.GET) {

            const response = await HTTP.get(url, headers);
            return handleResponse(response.statusCode, response.body, response.error);
        } else if (method === Constants.NETWORK.HTTP_METHOD.POST) {

            const response = await HTTP.post(url, headers, body);
            return handleResponse(response.statusCode, response.body, response.error);
        }
    }
}

/**
 * Get the Headers
 * @param {Map} headerMap 
 * @param {String} accessToken 
 * @param {String} accountDn 
 */
function getHeader(headerMap, accessToken, accountDn, vaType) {

    var finalHeader = getBasicHeader(accessToken, accountDn, vaType);

    /* create the headers here with appending the Server Specific and basic headers here */
    if (headerMap != null && !typeOf(headerMap).isnt('map')) {

        for (var key in headerMap) {
            if (headerMap.hasOwnProperty(key)) {
                finalHeader.set(key, headerMap[key]);
            }
        }
    }

    return finalHeader;
}

/**
 * Get basic headers
 * @param {String} accessToken 
 * @param {String} accountDn 
 */
function getBasicHeader(accessToken, accountDn, vaType) {

    var headers = new Map();
    headers[Constants.NETWORK.HEADER.KEY_CONTENT_TYPE] = Constants.NETWORK.HEADER.VALUE_CONTENT_TYPE_VALUE;
    headers[Constants.NETWORK.HEADER.KEY_ACCEPT] = Constants.NETWORK.HEADER.VALUE_ACCEPT;

    var userAgent = getUserAgent(vaType);
    if (!stringUtil(userAgent).isEmpty()) {
        headers[Constants.NETWORK.HEADER.KEY_USER_AGENT] = userAgent;
    }
    if (!stringUtil(accessToken).isEmpty()) {
        headers[Constants.NETWORK.HEADER.KEY_AUTHORIZATION] = "Bearer " + accessToken;
    }

    if (!stringUtil(accountDn).isEmpty()) {
        headers[Constants.NETWORK.HEADER.KEY_CLIENT_ID] = accountDn;
    }

    return headers;
}

function handleResponse(statusCode, response, error) {

    try {
        logger.info(`Status Code: ${statusCode}`);
        logger.info(`Api Response: ${JSON.stringify(response)}`);
    
        if (error) {
            logger.error(`Error: ${JSON.stringify(error)}`);
        }
    } catch (err) {
        
    }

    /* Check if it is an error response. */
    const httpError = new HttpError().initWithErrorResponse(response);
    if (httpError != null) {
        return {
            "statusCode": statusCode,
            "response": response,
            "httpError": httpError
        };
    }

    /* If error is not null, then Api call failed. */
    if (error != null) {
        
        const httpError = new HttpError().initWithStatusCode(statusCode);
        
        return {
            "statusCode": statusCode,
            "response": response,
            "httpError": httpError
        };
    }
    
    return {
        "statusCode": statusCode,
        "response": response,
        "httpError": null
    };
}

/**
 * Gets the useragent based on vaType
 * @param {String} vaType 
 */
function getUserAgent(vaType) {
    var userAgent = "";
    if (vaType === Constants.VOICE_ASSISTANCE_TYPES.ALEXA) {
        userAgent = Constants.NETWORK.HEADER.VALUE_USER_AGENT_ALEXA;
    } else if (vaType === Constants.VOICE_ASSISTANCE_TYPES.GOOGLE) {
        userAgent = Constants.NETWORK.HEADER.VALUE_USER_AGENT_GOOGLE_HOME;
    }
    return userAgent
}