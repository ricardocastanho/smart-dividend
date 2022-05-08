import { Browser, Page } from 'puppeteer'

jest.mock('puppeteer', () => {
  return {
    Page: jest.fn().mockImplementation(function () {
      return {
        goto: jest.fn().mockReturnThis(),
        click: jest.fn().mockReturnThis(),
        type: jest.fn().mockReturnThis(),
        waitForNavigation: jest.fn().mockReturnThis()
      }
    }),
    Browser: jest.fn().mockImplementation(() => {
      return {
        newPage: jest.fn(function () {
          return this.pageMock
        }),
        close: jest.fn().mockReturnValue(undefined)
      }
    })
  }
})

export const BrowserMock = Browser as unknown as jest.Mock<Browser>
export const PageMock = Page as unknown as jest.Mock<Page>
