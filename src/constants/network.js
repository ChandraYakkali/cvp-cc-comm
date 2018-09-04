/**
 * Defines Network constants.
 */

var constants = {};
constants.REQUEST_TIMEOUT = 60;

/* Header Constants */
constants.HEADER = {};
constants.HEADER.KEY_CONTENT_TYPE = "Content-Type";
constants.HEADER.KEY_USER_AGENT = "User-Agent";
constants.HEADER.KEY_AUTHORIZATION = "Authorization";
constants.HEADER.KEY_CLIENT_ID = "ClientID";
constants.HEADER.KEY_ACCEPT = "Accept";
constants.HEADER.KEY_CARDINAL_IDENTIFIER = "xCardinalIdentifier";
constants.HEADER.VALUE_CONTENT_TYPE_VALUE = "application/json; charset=UTF-8";
constants.HEADER.VALUE_USER_AGENT_ALEXA = "VA-AX";
constants.HEADER.VALUE_USER_AGENT_GOOGLE_HOME = "VA-GH";
constants.HEADER.VALUE_ACCEPT = "text/json";

/* Request Body constants */
constants.BODY = {};
constants.BODY.KEY_VIN = "vin";
constants.BODY.KEY_OPERATION = "operation";

constants.RESPONSE = {};
constants.RESPONSE.KEY_CHALLENGE_KEY = "ckey";
constants.RESPONSE.KEY_ERROR_CODE = "errorCode";

/* Request Type Constants */
constants.HTTP_METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
};

/* Request URLs */
const Config = require('../config');
constants.URL = {};
constants.URL.BASE = Config.ENV.SERVER_BASE_URL;
constants.URL.PATH_COMMON = "/smpsMRC/Service.svc";


constants.URL.CREATE_WALLET = constants.URL.BASE + constants.URL.PATH_COMMON + "/CreateDetailedSMPSUser";
constants.URL.UPDATE_WALLET = constants.URL.BASE + constants.URL.PATH_COMMON + "/UpdateSMPSUserPayment";

module.exports = Object.freeze(constants);
