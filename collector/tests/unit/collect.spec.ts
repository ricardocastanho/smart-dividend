import { Browser } from 'puppeteer'
import { collectData } from '@/collect'

const pageMock = {
  goto: jest.fn().mockReturnThis()
}

jest.mock('puppeteer', () => {
  return {
    Browser: jest.fn().mockImplementation(() => {
      return {
        newPage: jest.fn(() => pageMock),
        close: jest.fn().mockReturnValue(undefined)
      }
    })
  }
})

const BrowserMock = Browser as unknown as jest.Mock<Browser>

describe('collecting data', () => {
  it('should go to a especified tab', async () => {
    const browserMock = new BrowserMock()
    await collectData(browserMock)

    expect(browserMock.newPage).toHaveBeenCalledTimes(1)
    expect(browserMock.newPage).toHaveBeenCalledWith()

    expect(browserMock.close).toHaveBeenCalledTimes(1)
    expect(browserMock.close).toHaveBeenCalledWith()

    expect(pageMock.goto).toHaveBeenCalledTimes(1)
    expect(pageMock.goto).toHaveBeenCalledWith('http://mock.test.com')
  })
})
