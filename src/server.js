'use strict';

require('dotenv').config();
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost'
  });
  const routes = require('./routes');

  await server.route(routes);
  await server.start();
}

module.exports = init;