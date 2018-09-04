const app = require('express')();
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');

/* Initial Setup */
const Session = require('./src/common/managers/session');
const logger = require('./src/common/utils/logger');
const localConfig = require('./config.js');
const Config = require('./src/config');
const Constants = require('./src/constants');

/* Body parsing middleware */
app.use(bodyParser.urlencoded({
    extended: true
}));

/* Set and listen to port */
app.set('port', Config.ENV.PORT);
app.listen(app.get('port'), function () {
    logger.info('Node app is running on port ' + app.get('port'));
});

app.use(function (req, res, next) {

    try {
        let namespace = Session.getSession();

        /* run following middleware in the scope of the namespace we created */
        namespace.run(function () {
            Session.setTimestamp();
            next();
        });
    } catch (error) {
        next();
    }
});

registerRoutes();

function registerRoutes() {

    try {
        const walletRouter = require('./src/routes/wallet')();
        app.use(Constants.ROUTES.WALLET, walletRouter);

        const obdckeyRouter = require('./src/routes/obdckey')();
        app.use(Constants.ROUTES.OBDC_KEY, obdckeyRouter);

        const emqAuthRouter = require('./src/routes/emqAuth')();
        app.use(Constants.ROUTES.EMQ_AUTH, emqAuthRouter);

    } catch (error) {

    }
}