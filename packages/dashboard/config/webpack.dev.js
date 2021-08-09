const { merge } = require('webpack-merge');
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const pkgDependencies = require('../package.json');

const commonConfig = require('./webpack.common');
const DEV_PORT = 8083;
const devConfig = {
  mode: 'development',
  output: {
    // tell webpack to package where we load resources such as js files, css files
    publicPath: `http://localhost:${DEV_PORT}/`,
  },
  devServer: {
    clientLogLevel: 'error',
    port: DEV_PORT,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap',
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
