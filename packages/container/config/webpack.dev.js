const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkgDependencies = require('../package.json');
const commonConfig = require('./webpack.common');
const DEV_PORT = 8080;
const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${DEV_PORT}/`,
  },
  devServer: {
    clientLogLevel: 'info',
    port: DEV_PORT,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
      },
      // some of specific libs
      // shared: ['react', 'react-dom'],

      // all libs in package.json are shared
      shared: pkgDependencies.dependencies,
    }),
  ],
};

// module.exports = devConfig;
module.exports = merge(commonConfig, devConfig);
