# <%= projectName %>

<%= projectName %> - A Serverless Framework Node.js application

Bootstrapped using the serverless-nodejs Yeoman Generator

## Usage Notes

### Versioning

https://docs.npmjs.com/cli/version

Examples:

`yarn version --new-version patch`

`yarn version --new-version minor`

`yarn version --new-version major`

The preversion script in package.json runs tests before a version is incremented. This can be changed to `npm run coverage:strict` to ensure coverage is at a set level.

### Code Coverage

https://github.com/zinserjan/mocha-webpack/issues/19

### babel-polyfill

* For production builds babel-polyfill is required in hander.js
* Mocha includes babel-polyfill for each of the tests i.e. the files can be tested independently of handler.js
* The if around babel-polyfill in handler.js allows Mocha to test it without double requiring the polyfill

### Atom Editor

#### Plugins

* Show non-standard-js problems as you type
  * linter
  * linter-ui-default
  * linter-js-standard-engine
    * Note: standard needs to be installed in devDependencies in package.json for this to work
* Automatically format using ctrl-alt-f
  * prettier-standard-formatter
    * Note: this installs an old version of the prettier-standard-formatter. See workaround below:

prettier-standard-formatter workaround:

The old version of prettier-standard-formatter bundled with this Atom plugin strips brackets from && || statements. This causes the following warning:

`Unexpected mix of '&&' and '||'`

This fixes the problem:

```
cd ~/.atom/packages/prettier-standard-formatter
yarn add prettier-standard-formatter
```
