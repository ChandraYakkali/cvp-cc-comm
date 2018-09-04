/**
 * Config properties
 */

var config = {};

config.PIN_VALIDATION_FAILED_ATTEMPTS_LIMIT = 3;
config.DUPLICATE_FAVORITE_NAME_ATTEMPTS_LIMIT = 3;

config.ALEXA_APP_ID = 'amzn1.ask.skill.e63cd022-03c6-4940-8971-47abb1cae838';
config.GOOGLE_VERIFICATION_HEADER_KEY = 'sec1';
config.GOOGLE_VERIFICATION_HEADER_VALUE = '4413ba73-ed93-4d57-9d7a-e309c032cac5';

config.HEALTH_CHECK_RESPONSE = {
    status: 'OK'
};

module.exports = Object.freeze(config);
