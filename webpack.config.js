//webpack.config.js
var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "client"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  }
};
