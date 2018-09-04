/**
 * Defines routes constants.
 */

let routePrefix = "/cvp-cc-comm/";

const ENV = require('../../config').ENV;
const variant = require('../../config').VARIANT;

if (ENV === 'NRT') {
    if (variant === 'REL') {
        routePrefix = `${routePrefix}v1/`;
    } else if (variant === 'DEV') {
        routePrefix = `${routePrefix}v1/`;
    } else if (variant === 'LOCAL') {
        routePrefix = `${routePrefix}v1/`;
    }
}
else {
    if (variant === 'GENPOP') {
        routePrefix = `${routePrefix}v1/`;
    } else if (variant === 'BETA') {
        routePrefix = `${routePrefix}v1/`;
    } else if (variant === 'LOCAL') {
        routePrefix = `${routePrefix}v1/`;
    }
}

let routes = {
    HEALTH_CHECK: routePrefix + "healthcheck",
    WALLET: routePrefix + "wallet",
    OBDC_KEY: routePrefix + "obdckey",
    EMQ_AUTH: routePrefix + "mqtt"
};

module.exports = Object.freeze(routes);
