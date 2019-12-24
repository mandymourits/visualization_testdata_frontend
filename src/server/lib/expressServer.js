// @flow

// #region imports
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const { error404, error500 } = require('../middleware/errors');
const config = require('../config');
// #endregion

// #region constants
const DOCS_PATH = '../../../docs/';
// #endregion

// $FlowIgnore
const expressServer = (app = null, isDev = false) => {
  if (!app) {
    console.log('Server application instance is undefined');
    throw new Error('Server application instance is undefined');
  }

  var server_port = process.env.PORT;
  var server_host = '0.0.0.0';

  app.set('port', server_port);
  app.set('ipAdress', server_host);

  app.use(
    '/assets',
    express.static(path.join(__dirname, DOCS_PATH, 'assets/')),
  );

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html'),
  res.redirect('/about'),
),
  );

  app.use(error404);
  app.use(error500);

  app.listen(server_port,server_host,function(){
    console.log('app running on ' + process.env.PORT)
  });

  // /* eslint-disable no-console */
  // app.listen(process.env.PORT, '0.0.0.0', () =>
  //   console.log(`
  //       =====================================================
  //       -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(
  //     config.get(server_host),
  //   )}:${chalk.green(server_port)}
  //       =====================================================
  //     `),
  // );
  // /* eslint-enable no-console */

  return app;
};

module.exports = expressServer;
