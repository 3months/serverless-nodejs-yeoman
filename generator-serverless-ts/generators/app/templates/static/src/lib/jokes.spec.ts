/* global describe it */
import { expect } from 'chai'
import * as jokes from './jokes'

const user = { firstName: 'Jane', lastName: 'User2', age: 14 }

describe('(module) jokes', function () {
  it('should have a greeter', function () {
    expect(jokes.greeter(user)).to.equal(
      'Hello, Jane User2. Your age is: 168 months',
      'greeting is correct'
    )
  })

  it('should give a number', function () {
    expect(jokes.hello(2, 4)).to.equal(8, '8 is returned')
  })
})
