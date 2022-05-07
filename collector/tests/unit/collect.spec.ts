import { PageMock } from '@/config/__mocks__/puppeteer'
import { collectData } from '@/collect'

jest.mock('@/config/puppeteer')

describe('collecting data', () => {
  it('should go to a especified tab', async () => {
    const pageMock = new PageMock()
    await collectData(pageMock)

    expect(pageMock.goto).toHaveBeenCalledTimes(1)
    expect(pageMock.goto).toHaveBeenCalledWith('http://mock.test.com')
  })
})
