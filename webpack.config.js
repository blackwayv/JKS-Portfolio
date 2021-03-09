let nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: __dirname + '/client/app.jsx',
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
          exclude: [ '/portfolio-files', '/node_modules' ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
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
  }