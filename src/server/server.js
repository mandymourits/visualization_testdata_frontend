// @flow

// #region imports
const express = require('express');
const PrettyError = require('pretty-error');
const expressServer = require('./lib/expressServer');
const config = require('./config');
const port = process.env.PORT || 8080;
// #endregion

// #region constants
const dev = config.get('env') !== 'production';
const pe = new PrettyError();
// #endregion

try {
  pe.start();

  const app = express();
  expressServer(app, dev);
  app.listen(port);
} catch (error) {
  console.log('server error: ', error);
}
