import * as saylib from './lib/say'

/* istanbul ignore next */
if (!global._babelPolyfill) {
  require('babel-polyfill')
}

export const responseFormat = (statusCode, msg) => ({
  statusCode,
  // Required for CORS
  headers: { 'Access-Control-Allow-Origin': '*' },
  body: JSON.stringify(msg)
})

export const makeHello = ({ say = saylib, format = responseFormat } = {}) =>
  async function hello (event, context, callback) {
    try {
      const msg = await say.saythings()
      callback(null, format(200, msg))
    } catch (e) {
      callback(e)
    }
  }

export const hello = makeHello()
