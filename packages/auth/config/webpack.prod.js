const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const pkgDependencies = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/lastest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      // some of specific libs
      // shared: ['react', 'react-dom'],

      // all libs in package.json are shared
      shared: pkgDependencies.dependencies,
    }),
  ],
};

// module.exports = devConfig;
module.exports = merge(commonConfig, prodConfig);
