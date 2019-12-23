// @flow

// #region imports
const express = require('express');
const PrettyError = require('pretty-error');
const expressServer = require('./lib/expressServer');
const config = require('./config');
const port = process.env.PORT || 8082;
// #endregion

// #region constants
const dev = config.get('env') !== 'production';
const pe = new PrettyError();
// #endregion

try {
  pe.start();

  const app = express();
  app.listen(port);
  expressServer(app, dev);
} catch (error) {
  console.log('server error: ', error);
}
