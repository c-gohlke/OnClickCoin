// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './app/app.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [/(node_modules|bower_components)/, /\.ejs$/],
        use: {
          loader: 'file-loader',
          options: {},
        },
      },
    ],
  },
};
