import { Browser } from 'puppeteer'

export const pageMock = {
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

export const BrowserMock = Browser as unknown as jest.Mock<Browser>
