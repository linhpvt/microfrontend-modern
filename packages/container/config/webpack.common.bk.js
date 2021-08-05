module.exports = {
  module: {
    rules: [
      {
        // all files end with .mjs or .js will be processed
        test: /\.m?js$/,
        // no process node_modules
        exclude: /node_modules/,
        // plugin we use to process for packaging, transpiling
        use: {
          // using babel loader for processing output
          loader: 'babel-loader',
          options: {
            presets: [
              // react syntax -> es5
              '@babel/preset-react',
              // esX -> es5
              '@babel/preset-env',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
