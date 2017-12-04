const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
  // fix: webpack require('crypto') TypeError: require is not a function
  //      lambdas give a "module initialization error: TypeError" error otherwise
  // new webpack.DefinePlugin({ 'global.GENTLY': false })
]

if (process.env.NODE_ENV !== 'test') {
  plugins.push(new UglifyJSPlugin())
}

// main directory is the current one's parent
const dir = path.join(__dirname, '/..')

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
        include: dir,
        exclude: /node_modules/
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(dir, '.webpack'),
    filename: 'src/handler.js'
  }
}
