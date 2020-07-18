const Boom = require('@hapi/boom');

function badRequest(message) {
  return Boom.badRequest(message);
}

function forbidden(message) {
  return Boom.forbidden(message);
}

module.exports = {
  badRequest,
  forbidden
}
