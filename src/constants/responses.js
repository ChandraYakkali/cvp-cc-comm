/**
 * Defines API reponses constants.
 */


var reponses = {};

const resposneCodePrefix = "VA";

reponses.CODES = {};
reponses.CODES.INVALID_RESPONSE = resposneCodePrefix + "101";
reponses.CODES.ERROR_RESPONSE = resposneCodePrefix + "102";
reponses.CODES.ERROR_REQUEST = resposneCodePrefix + "103";
reponses.CODES.UTTERANCE_SUGGESTION = resposneCodePrefix + "104";
reponses.CODES.VEHICLE_OPERATION_SUCCESS = resposneCodePrefix + "105";
reponses.CODES.SELECT_DESTINATION = resposneCodePrefix + "106";
reponses.CODES.RELOGIN_NEEDED = resposneCodePrefix + "107";
reponses.CODES.INCORRECT_PIN_ATTEMPTS_EXCEEDED = resposneCodePrefix + "108";
reponses.CODES.NOVEHICLES_FOUND = resposneCodePrefix + "109";

module.exports = Object.freeze(reponses);
