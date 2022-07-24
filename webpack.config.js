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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
          from:'./node_modules/bootstrap/dist/css',
          to:`ui`
        },
        {
          from:'./src/index.html',
          to:`ui`
        }
      ]
    })
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`,
  }
};
