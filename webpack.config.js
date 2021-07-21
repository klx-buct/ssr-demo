const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.browser.js'
  },
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
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      server: path.resolve(__dirname, 'src/server'),
      components: path.resolve(__dirname, 'src/Isomorphic/components'),
    }
  }
}