const crypto = require('crypto');
const express = require('express');
const logger = require('../common/utils/logger');
const typeOf = require('../common/utils/typeOf');
const Constants = require('../constants');
const Session = require('../../src/common/managers/session');

module.exports = function () {

    var router = express.Router();

    router.route('/')
        .get(function (request, response, next) {

            logger.info('OBDC Key request received');

            try {
                /* responseHandler(request.body, response); */

                try {
                    logger.debug(`Request: ${JSON.stringify(request.query)}`);
                    const query = request.query;
                    if (query.imei && query.iccid) {
                        const IMEI = query.imei;
                        const ICCID = query.iccid;

                        const secret = IMEI.substring(IMEI.length - 8, IMEI.length) + ICCID.substring(ICCID.length - 7, ICCID.length);

                        console.log(`IMEI: ${IMEI}`);
                        console.log(`ICCID: ${ICCID}`);
                        console.log("Data: " + IMEI + ICCID);
                        console.log("Secret: " + secret);
                        const hash = crypto.createHmac('sha256', secret)
                            .update(IMEI + ICCID)
                            .digest('base64');

                        console.log(`Base64 Hash:\n${hash}\n`);
                        logger.info('Bad request');
                        response.status(200).json({
                            obdckey: hash
                        });
                    } else {
                        logger.info('Bad request');
                        response.status(400).json({
                            reason: 'Missing input'
                        });
                    }
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

    return router;
}