'use strict';

const Hapi = require('@hapi/hapi');
const { connectDB } = require('./Utils/DB/connect');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost'
  });

  connectDB();
  const routes = require('./routes');

  await server.route(routes);
  await server.start();
}

module.exports = init;