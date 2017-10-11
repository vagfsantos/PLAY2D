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
        test: /\.tsx?$/, 
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