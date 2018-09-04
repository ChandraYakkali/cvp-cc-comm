let routesConstants = require('./routes');
let reponsesConstants = require('./responses');
let networkPathsConstants = require('./network');
let enumConstants = require('./enum');
let messagesConstants = require('./messages');
let whitelistConstants = require('./whitelist');
let configConstants = require('./config');

module.exports = Object.freeze({
    ROUTES: routesConstants,
    RESPONSES: reponsesConstants,
    NETWORK: networkPathsConstants,
    ENUMS: enumConstants,
    MESSAGES: messagesConstants,
    WHITELIST: whitelistConstants,
    CONFIG: configConstants
});