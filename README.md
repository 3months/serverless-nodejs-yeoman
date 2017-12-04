# serverless-nodejs-yeoman

Sets up boilerplate for a Serverless Framework Node.js with the following features:

* es6+ using Webpack
* example functions with
  * unit tests (factory functions / inversion of control)
  * code coverage reports `yarn run coverage`
  * wallaby.js support for in-editor unit tests and coverage reports
* standard.js + prettier for automatic formatting

## Install

During development, make the generator available as a global module:

```
git clone https://github.com/SteveHoggNZ/serverless-nodejs-yeoman.git
```

`cd generator-serverless-nodejs && npm link`

`cd generator-serverless-ts && npm link`

Post development:

Publish as an NPM module and install it globally

## Usage

```
mkdir new-project && \
  cd $_ && \
  yo serverless-nodejs
```

## Notes

### Bootstrapped Using

```
npm install -g generator-generator &&
  mkdir generator-serverless-nodejs &&
  cd $_ &&
  yo generator
```

### Generated README.md

The generated README.md for a new project has instructions on getting Standard.js + Prettier working in the Atom editor
