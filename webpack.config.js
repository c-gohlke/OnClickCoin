//webpack.config.js
var path = require("path");
var webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./client/index.js"],
  output: {
    path: path.join(__dirname, "client"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [/(node_modules|bower_components)/, /\.ejs$/],
        use: {
          loader: "file-loader",
          options: {}
        }
      }
    ]
  }
};
