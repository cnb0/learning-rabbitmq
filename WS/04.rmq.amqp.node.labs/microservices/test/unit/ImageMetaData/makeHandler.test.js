const { expect } = require('chai')
const sinon = require('sinon')

const makeHandler = require('../../../src/ImageMetaData/makeHandler')

describe('src/ImageMetaData/makeHandler', () => {
  const subscriber = {
    ack: sinon.spy()
  }
  const content = JSON.stringify({
    meta: 'This is a test'
  })

  before(async () => {
    const handler = makeHandler(subscriber, 'test')
    await handler({ content })
  })

  it('called subscriber.ack', () => {
    expect(subscriber.ack).to.have.been.calledOnce
  })
})
