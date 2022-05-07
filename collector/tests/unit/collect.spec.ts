import { pageMock, BrowserMock } from '@/config/__mocks__/puppeteer'
import { collectData } from '@/collect'

jest.mock('@/config/puppeteer')

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
