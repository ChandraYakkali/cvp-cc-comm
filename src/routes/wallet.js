const express = require('express');
const logger = require('../common/utils/logger');
const typeOf = require('../common/utils/typeOf');
const Constants = require('../constants');
const Session = require('../../src/common/managers/session');

module.exports = function () {

    var router = express.Router();

    router.route('/create')
        .post(function (request, response, next) {

            logger.info('Wallet request received');

            try {
                /* responseHandler(request.body, response); */

                try {
                    logger.debug(`Request: ${JSON.stringify(request.body)}`);
                } catch (error) {}

                try {
                    const headers = request.headers;

                    response.status(200).send({
                        status: headers
                    });

                } catch (error) {
                    logger.info('Unauthorized request');
                    response.status(401).json({
                        status: 'failure'
                    });
                }

            } catch (error) {
                response.status(400).send({
                    error: "Invalid request"
                });
            }
        });

    router.route('/update')
        .post(function (request, response, next) {

            logger.info('Wallet request received');

            try {
                /* responseHandler(request.body, response); */

                try {
                    logger.debug(`Request: ${JSON.stringify(request.body)}`);
                } catch (error) {}

                try {
                    const headers = request.headers;

                    response.status(200).send({
                        status: headers
                    });

                } catch (error) {
                    logger.info('Unauthorized request');
                    response.status(401).json({
                        status: 'failure'
                    });
                }

            } catch (error) {
                response.status(400).send({
                    error: "Invalid request"
                });
            }
        })

    return router;
}