'use strict';

module.exports = async (request, handler) => {
  return handler.response({
    status: 'OK',
    UP_STAGE: process.env.UP_STAGE
  });
}