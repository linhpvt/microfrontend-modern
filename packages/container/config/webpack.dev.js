const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkgDependencies = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    clientLogLevel: 'info',
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
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
