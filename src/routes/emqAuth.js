const express = require('express');
const logger = require('../common/utils/logger');

let users = [];
for (let index = 1; index <= 10; index++) {
    users.push({
        username: `emquser${index}`,
        password: `securetoken${index}`
    });
}

let topics = [];
topics.push('/cvp/{username}/engineOn');
topics.push('/cvp/{username}/engineOff');
topics.push('/cvp/{username}/trips');

module.exports = function () {

    var router = express.Router();

    router.route('/auth')
        .post(function (request, response, next) {

            logger.info('Auth request received');

            try {
                /* responseHandler(request.body, response); */

                try {
                    logger.debug(`Request: ${JSON.stringify(request.body)}`);
                } catch (error) {}

                try {
                    const query = request.body;
                    logger.debug(`Query: ${JSON.stringify(query)}`);

                    for (let index = 0; index < users.length; index++) {
                        const user = users[index];
                        if (user.username === query.username && user.password === query.password) {
                            response.status(200).send(null);
                            return;
                        }
                    }
                    
                    response.status(401).send(null);

                } catch (error) {
                    logger.info('Unauthorized request');
                    response.status(401).send(null);
                }

            } catch (error) {
                response.status(400).send({
                    error: "Invalid request"
                });
            }
        });

    router.route('/superuser')
        .post(function (request, response, next) {

            logger.info('Super user Auth request received');

            try {
                /* responseHandler(request.body, response); */

                try {
                    logger.debug(`Request: ${JSON.stringify(request.body)}`);
                } catch (error) {}

                try {
                    const query = request.query;
                    logger.debug(`Query: ${JSON.stringify(query)}`);

                    if (query.username === 'admin') {
                        response.status(200).send(null);
                        return;
                    }

                    response.status(401).send(null);

                } catch (error) {
                    logger.info('Unauthorized request');
                    response.status(401).send(null);
                }

            } catch (error) {
                response.status(400).send({
                    error: "Invalid request"
                });
            }
        });

    router.route('/acl')
        .get(function (request, response, next) {

            logger.info('ACL request received');

            try {
                /* responseHandler(request.body, response); */

                try {
                    logger.debug(`Request: ${JSON.stringify(request.body)}`);
                } catch (error) {}

                try {
                    const query = request.query;
                    logger.debug(`Query: ${JSON.stringify(query)}`);

                    for (let index = 0; index < topics.length; index++) {
                        let topic = topics[index];
                        topic = topic.replace('{username}', query.username);

                        if (topic === query.topic) {
                            response.status(200).send(null);
                            return;
                        }
                    }

                    response.status(401).send(null);

                } catch (error) {
                    logger.info('Unauthorized request');
                    response.status(401).send(null);
                }

            } catch (error) {
                response.status(400).send({
                    error: "Invalid request"
                });
            }
        });

    return router;
}