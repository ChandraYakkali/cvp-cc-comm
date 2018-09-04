/**
 * HttpError model object
 */

const Constants = require('../constants');
const stringUtil = require('../common/utils/string');
const typeOf = require('../common/utils/typeOf');

function HttpError() {

    this.HttpStatusCode = 0;
    this.errorCode = null;
    this.errorLabel = null;
    this.errorDesc = null;
}

HttpError.prototype.initWithErrorResponse = function (errorResponse) {

    try {

        const errorCode = errorResponse[Constants.NETWORK.RESPONSE.KEY_ERROR_CODE];
        const errorLabel = errorResponse[Constants.NETWORK.RESPONSE.KEY_ERROR_LABEL];
        const errorDesc = errorResponse[Constants.NETWORK.RESPONSE.KEY_ERROR_DESCRIPTION];

        if (errorCode == null || errorLabel == null || errorDesc == null) {
            return null;
        }

        if (stringUtil(errorCode).isEmpty()) {
            return null;
        }

        this.errorCode = errorCode;
        this.errorLabel = errorLabel;
        this.errorDesc = errorDesc;

    } catch (error) {
        return null;
    }

    return this;
};

HttpError.prototype.init = function (errorCode, errorLabel, errorDesc) {

    if (errorCode == null || errorLabel == null || errorDesc == null) {
        return null;
    }

    if (stringUtil(errorCode).isEmpty()) {
        return null;
    }

    this.errorCode = errorCode;
    this.errorLabel = errorLabel;
    this.errorDesc = errorDesc;

    return this;
};

HttpError.prototype.initWithStatusCode = function (statusCode) {

    if (statusCode == null) {
        return null;
    }

    if (typeOf(statusCode).isnt('number')) {
        return null;
    }

    this.statusCode = statusCode;
    return this;
};

module.exports = HttpError;