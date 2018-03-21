'use strict'
/* global describe it */
import sinon from 'sinon'
import chai, { expect } from 'chai'
import { responseFormat, makeHello, hello } from './handler.js'

chai.use(require('chai-as-promised')).use(require('sinon-chai'))

// let proxyquire = require('proxyquire')
// proxyquire = proxyquire.noPreserveCache();
describe('(hander)', function () {
  describe('formatResponse', function () {
    it('should be a function', function () {
      expect(typeof responseFormat).to.equal('function', 'is a function')
    })

    it('should format as a http response', function () {
      expect(responseFormat(200, { fake: true })).to.deep.equal({
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ fake: true })
      })
    })
  })

  describe('makeHello', function () {
    it('should be a factory', function () {
      expect(typeof makeHello).to.equal('function', 'is a function')
      expect(typeof makeHello()).to.equal('function', 'is a factory')
    })

    it('should say hello', async function () {
      const sandbox = sinon.sandbox.create()
      const format = sandbox.stub().returnsArg(1)
      const say = { saythings: sandbox.stub() }
      const cb = sandbox.stub()

      // === success ===
      say.saythings.resolves('fake message')
      await makeHello({ say: say, format })({}, {}, cb)
      expect(cb.getCall(0).args).to.deep.equal(
        [null, 'fake message'],
        'callback success called'
      )

      // === failure ===
      sandbox.reset()
      say.saythings.rejects(Error('fake error'))
      await makeHello({ say: say, format })({}, {}, cb)
      expect(cb.getCall(0).args[0].message).to.equal(
        'fake error',
        'callback error called'
      )
    })
  })

  describe('hello', function () {
    it('should be a function', function () {
      expect(typeof hello).to.equal('function', 'is a function')
    })
  })
})
