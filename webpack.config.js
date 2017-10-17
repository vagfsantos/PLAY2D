var path = require('path');

module.exports = {
  entry: './src/js/index.ts',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'play2d.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015']
          }
        }
      },
      { 
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },

  devServer: {
    contentBase: './',
    publicPath: '/dist/',
    filename: 'play2d.js'
  }
}