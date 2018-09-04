/**
 * Local configuration
 */

 /*
    ENV:
        - 'NRT' -- NRT environment
        - 'FIT' -- FIT environment

    VARIANT:
        - For ENV = 'NRT'
            - 'DEV' -- to be used only while development
            - 'REL' -- to be used for release build for QA
            - 'LOCAL' -- to be used when running on local machine
        - For ENV = 'FIT'
            - 'BETA' -- to be used for release build for QA
            - 'GENPOP' -- to be used for live customers

    TEST_MODE:
        - true -- points to constants_test

    LOG_LEVEL:
        - info -- prints info and error level logs
        - debug -- prints all logs
*/

let config = {
    TEST_MODE: false,
    ENV: 'NRT',
    VARIANT: 'LOCAL',
    LOG_LEVEL: 'debug'
};

module.exports = config;
