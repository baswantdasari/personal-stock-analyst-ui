const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    app: path.resolve(`${__dirname}/src/app.js`)
  },

  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns:[
        {
          from:'./src/index.html',
          to:``
        }
      ]
    })
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`,
  }
};
