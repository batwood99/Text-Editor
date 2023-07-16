const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    install: './src/js/install.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['main'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['install'],
      filename: 'install.html',
    }),
    new WebpackPwaManifest({
      name: 'J.A.T.E',
      short_name: 'JATE',
      icons: [
        {
          src: path.resolve("./src/images/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          type: "image/png",
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'service-worker.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};