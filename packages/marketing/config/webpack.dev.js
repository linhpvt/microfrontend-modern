const { merge } = require('webpack-merge');
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const pkgDependencies = require('../package.json');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    clientLogLevel: 'info',
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      // some of specific libs
      // shared: ['react', 'react-dom'],

      // all libs in package.json are shared
      shared: pkgDependencies.dependencies,
    }),
    new HtmlWebpackPlugIn({
      template: './public/index.html',
    }),
  ],
};

// module.exports = devConfig;
module.exports = merge(commonConfig, devConfig);
