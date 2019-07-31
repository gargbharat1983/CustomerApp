const publicPath = '/dist/build/';
let path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: [ path.resolve(__dirname, 'src/index')],
 output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    /*new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })*/
  ],
  module: {
      loaders: [
          { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
          { test: /(\.css)$/, loaders: ['style', 'css'] },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
      ]
  }
};