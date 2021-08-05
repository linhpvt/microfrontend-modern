const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonCfg = require('./webpack.common');
const domain = process.env.PRODUCTION_DOMAIN || 'http://localhost';
const pkgDependencies = require('../package.json');

const prodConfg = {
  mode: 'production',
  // file name of built file
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: pkgDependencies.dependencies,
    }),
  ],
};

module.exports = merge(commonCfg, prodConfg);
