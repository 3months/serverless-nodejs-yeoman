'use strict'
/* global describe it */
import sinon from 'sinon'
import chai, { expect } from 'chai'
import { waitThenSay, makeSaythings, saythings } from './say.js'

chai.use(require('chai-as-promised')).use(require('sinon-chai'))

describe('(module) say', function () {
  describe('waitThenSay', function () {
    it('should be a function', function () {
      expect(typeof waitThenSay).to.equal('function', 'is a function')
    })

    it('should say the message', async function () {
      expect(
        await waitThenSay('fake-message', 0)
      ).to.equal('fake-message', 'message is correct')
    })

    it('should say the default message', async function () {
      expect(
        await waitThenSay()
      ).to.equal('Hello World', 'message is correct')
    })
  })

  describe('makeSaythings', function () {
    it('should be a factory', function () {
      expect(typeof makeSaythings).to.equal('function', 'is a function')
      expect(typeof makeSaythings()).to.equal('function', 'is a factory')
    })

    it('should say things', async function () {
      const sayFunction = sinon.stub().resolves('fake')
      expect(
        await makeSaythings({ sayFunction })()
      ).to.equal('Computer says: fake fake fake')
    })
  })

  describe('saythings', function () {
    it('should be a function', function () {
      expect(typeof saythings).to.equal('function', 'is a function')
    })
  })
})
