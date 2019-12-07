const { authenticate } = require('@feathersjs/authentication').hooks;

const attachUserToMessage = require('../../hooks/attach-user-to-message');

const processMessage = require('../../hooks/process-message');

module.exports = {
  before: {
    all: [ authenticate('jwt')],
    find: [],
    get: [],
    create: [processMessage()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [attachUserToMessage()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
