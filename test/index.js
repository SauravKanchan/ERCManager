const { expect } = require('chai')

const lib = require('../lib')

describe('My package', function () {
  it('should pass', function () {
    const answer = lib()
    expect(answer).to.equals(42)
  })
})
