var config = {};

const localConfig = require('../../config');

config.ENV = localConfig.ENV;
config.VARIANT = localConfig.VARIANT;

if (config.VARIANT === 'BETA') {
    config.PORT = 5000;
    config.LOG_DIR = '/apps/vaa_logs/beta';
    config.ALEXA_SKILL_ID = 'amzn1.ask.skill.099a6cf2-ab2a-4298-8fa5-405cbfa74648';
} else if (config.VARIANT === 'GENPOP') {
    config.PORT = 5000;
    config.LOG_DIR = '/apps/vaa_logs/prod';
    config.ALEXA_SKILL_ID = 'amzn1.ask.skill.099a6cf2-ab2a-4298-8fa5-405cbfa74648';
} else if (config.VARIANT === 'LOCAL') {
    config.PORT = 5000;
    config.LOG_DIR = './logs';
    config.ALEXA_SKILL_ID = 'amzn1.ask.skill.099a6cf2-ab2a-4298-8fa5-405cbfa74648';
}

config.SERVER_BASE_URL = "https://vsb.cvp.extra.chrysler.com:8080";

module.exports = config;