module.exports = {
  apps: [
    {
      name: 'VirtualizationTool_Frontend',
      script: '/var/lib/jenkins/workspace/VirtualizationTool/frontend/src/server/server.js',
      instances: 0,
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: '8082',
      },
    },
  ],
};
