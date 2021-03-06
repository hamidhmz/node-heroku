const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-heroku API documentation',
    version,
  },
  servers: [
    {
      url: 'https://hamidhmz-node-heroku.herokuapp.com/v1',
    },
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
