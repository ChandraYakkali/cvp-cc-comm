var config = {};

const localConfig = require('../../config');

config.ENV = localConfig.ENV;
config.VARIANT = localConfig.VARIANT;

if (config.VARIANT === 'REL') {
    config.PORT = 5000;
    config.LOG_DIR = '/home/ec2-user/logs/cvp-cc-comm/rel';
    config.ALEXA_SKILL_ID = 'amzn1.ask.skill.7b3f04af-6eb9-4cd7-898e-954ed75ca417';
} else if (config.VARIANT === 'DEV') {
    config.PORT = 5000;
    config.LOG_DIR = '/home/ec2-user/logs/cvp-cc-comm/dev';
    config.ALEXA_SKILL_ID = 'amzn1.ask.skill.e63cd022-03c6-4940-8971-47abb1cae838';
} else if (config.VARIANT === 'LOCAL') {
    config.PORT = 5000;
    config.LOG_DIR = './logs';
    config.ALEXA_SKILL_ID = 'amzn1.ask.skill.7b3f04af-6eb9-4cd7-898e-954ed75ca417';
}

config.SERVER_BASE_URL = "https://vsb.nrt.unabdev.sprint.com:8080";

module.exports = config;
