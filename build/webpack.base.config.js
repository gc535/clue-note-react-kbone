const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    index: path.resolve(__dirname, '../src/index.jsx'),
    game: path.resolve(__dirname, '../src/game.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/web'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
}
