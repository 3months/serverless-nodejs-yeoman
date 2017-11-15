// https://wallabyjs.com/docs/integration/node.html
// https://github.com/wallabyjs/public/issues/922

module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    '!src/**/*.spec.js'
  ],

  // do not cover third-party library
  filesWithNoCoverageCalculated: ['src/lib/blocktrail/blocktrail-request.js'],

  tests: ['src/**/*.spec.js'],

  hints: {
    ignoreCoverage: /istanbul ignore next/
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },

  env: {
    type: 'node'
  }
})
