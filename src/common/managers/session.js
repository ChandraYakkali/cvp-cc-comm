/**
 * Session Handler
 */

const createNamespace = require('cls-hooked').createNamespace;
const getNamespace = require('cls-hooked').getNamespace;
const SESSION_NAME = 'application-session';

const session = createNamespace(SESSION_NAME);

module.exports = {
  set: (key, value) => session.set(key, value),
  get: (key) => session.get(key) ? session.get(key) : '',
  getSession: () => getNamespace(SESSION_NAME),
  getSessionId: () => session.get('session_id'),
  getTimestamp: () => session.get('ts'),
  setSessionId: (sessionId) => session.set('session_id', sessionId),
  setTimestamp: () => session.set('ts', (new Date).getTime())
};
