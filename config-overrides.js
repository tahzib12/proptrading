const path = require('path');

module.exports = function override(config, env) {
  // Modify the Webpack configuration here
  config.module.rules.push({
    test: /\.(ttf|eot|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '/fonts/',
        },
      },
    ],
  });

  return config;
};