// https://wallabyjs.com/docs/integration/node.html
// https://github.com/wallabyjs/public/issues/922
// https://wallabyjs.com/docs/config/compilers.html

module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    'src/**/*.ts',
    '!src/**/*.spec.js',
    '!src/**/*.spec.ts'
  ],

  tests: ['src/**/*.spec.js', 'src/**/*.spec.ts'],

  hints: {
    ignoreCoverage: /istanbul ignore next/
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
    '**/*.ts': wallaby.compilers.typeScript()
  },

  env: {
    type: 'node'
  }
})
