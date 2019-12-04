// const local = require('./local.json');
//
//
// class Environments {
//   constructor() {
//     this.host = host;
//     this.port = port;
//     this.scenarios = null;
//   }
//
//
//   get() {
//     let env = process.argv[3];
//     console.log('Get configuration for env ' + env);
//
//     if (!env) {
//       config = local;
//       env = 'local';
//     } else {
//       config = require('../../env/' + env + '.json');
//     }
//
//     config.name = env;
//     config.rootDir = process.cwd();
//     console.log('Configuration set to ' + config.name);
//     return config;
//   }
// }
//
// export default Environments
