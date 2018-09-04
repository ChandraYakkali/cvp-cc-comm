/**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');
const Session = require('../../../src/common/managers/session');
/* const debug = require('debug')('cvp-voice-assistance'); */

/*
const consoleConfig = [
	new winston.transports.Console({
		'colorize': true,
		'timestamp': true
	})
];
*/

const Config = require('../../config');
const LocalConfig = require('../../../config');
let LogLevel = LocalConfig.LOG_LEVEL;

let logDir = null;
try {
	logDir = Config.ENV.LOG_DIR;
} catch (error) {
}

if (!logDir) {
	logDir = './logs';
}

if (LogLevel !== 'debug' && LogLevel !== 'info') {
	LogLevel = 'info';
}

const logger = new winston.Logger({
	
});

logger.add(winstonRotator, {
	'name': 'log-file',
	'level': LogLevel,
	'filename': `${logDir}/log`,
	'json': false,
	'datePattern': '-yyyy-MM-dd.log',
	'prepend': false,
	'maxsize': 2 * 1024 * 1024 /* 2 MB */
});

module.exports = {

	debug: (log, module = null) => {
		try {
			if (LogLevel === 'debug') {
				logger.debug(prepareMessage(log, module));
			}
		} catch (error) {
			
		}
	},
	info: (log, module = null) => {
		try {
			logger.info(prepareMessage(log, module));
		} catch (error) {
			
		}
	},
	error: (log, module = null) => {
		try {
			logger.error(prepareMessage(log, module));
		} catch (error) {
			
		}
	},
	warn: (log, module = null) => {
		try {
			logger.warn(prepareMessage(log, module));
		} catch (error) {
			
		}
	},
	verbose: (log, module = null) => {
		try {
			logger.verbose(prepareMessage(log, module));
		} catch (error) {
			
		}
	},
	silly: (log, module = null) => {
		try {
			logger.silly(prepareMessage(log, module));
		} catch (error) {
			
		}
	},
	printTimeElapsed: (module = null) => {
		try {
			const startTs = Session.getTimestamp();
			const currentTs = (new Date).getTime();
			const diffTs = (currentTs - startTs) / 1000;
			
			if (diffTs >= 7) {
				logger.debug(prepareMessage(`Time exceeded limit: ${diffTs} seconds\n\n\n`, module));
			} else {
				logger.debug(prepareMessage(`Time elapsed: ${diffTs} seconds\n\n\n`, module));
			}
			
		} catch (error) {
			
		}
	}
};

function prepareMessage(log, module = null) {

	let msg = '';

	try {
		let path = "",
			sessionId = null,
			vaType = null;

		try {
			path = (module == null) ? "" : ("[" + module.filename.split('/').slice(-2).join('/') + "]: ");
			sessionId = Session.getSessionId();
			vaType = Session.getVaType();
		} catch (error) {

		}

		msg = `${path}${log}`;

		if (sessionId) {
			msg = `${sessionId}:${msg}`;
		}

		if (vaType) {
			msg = `${vaType}:${msg}`;
		}


	} catch (error) {

	}

	return msg;
}
