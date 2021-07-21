const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.server.js',
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '../public/main.css'
  })],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-jsx'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/Isomorphic/components'),
    }
  }
}