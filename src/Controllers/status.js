'use strict';

const { badRequest } = require('../Utils/boom')
module.exports = async (request, handler) => {
  return handler.response({
    status: 'OK'
  })
}