/**
 * Config setup
 */

let envConfig;

const localConfig = require('../../config.js');

if (localConfig.ENV === 'NRT') {
    envConfig = require('./config.nrt');
} else {
    envConfig = require('./config.fit');
}

module.exports = Object.freeze({
    ENV: envConfig
});
