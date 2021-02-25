let nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './client/app.jsx',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: 'file-loader',
        }
      ]
    },
    target: 'node',
    externals: [nodeExternals()],
  }