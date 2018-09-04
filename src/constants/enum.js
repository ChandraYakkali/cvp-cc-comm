/**
 * This file will contain all the enums required for application
 */

var enums = {};

enums.VEHICLE_SERVICE_STATUS = {
    ENABLED: "enabled",
    NOT_ENABLED: "not enabled",
    NOT_CAPABLE: "not capable"
};

enums.POI_SEARCH_TYPE = {
    NEARBY: "NEARBY_SEARCH",
    TEXT: "TEXT_SEARCH"
};

enums.NEGATIVE_VALUE = "NEGATIVE_VALUE";

module.exports = Object.freeze(enums);