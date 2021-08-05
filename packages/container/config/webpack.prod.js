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
    // this is the path under s3 bucket we deploy our container app to
    // eventually, the path of resource on the web page is: publicPath + filename
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // all files will be deployed under /marketing/lastest folder in S3 bucket
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: pkgDependencies.dependencies,
    }),
  ],
};

module.exports = merge(commonCfg, prodConfg);
