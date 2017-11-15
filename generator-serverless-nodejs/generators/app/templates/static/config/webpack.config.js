const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
  // // fix: webpack require('crypto') TypeError: require is not a function
  // //      lambdas give a "module initialization error: TypeError" error otherwise
  // new webpack.DefinePlugin({ 'global.GENTLY': false })
]

if (process.env.NODE_ENV !== 'test') {
  plugins.push(new UglifyJSPlugin())
}

module.exports = {
  entry: './src/handler.js',
  target: 'node',
  externals: {
    // Available within AWS Lambda environment
    'aws-sdk': 'commonjs aws-sdk'
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'src/handler.js'
  }
}
