/* global HTMLElement */
import { Page } from 'puppeteer'

const parseDividend = (dividendRaw: string): number => {
  const dividendNumber = dividendRaw.match(/\d+/g)
  const float = dividendNumber.pop()
  const integer = dividendNumber.join('')
  return parseFloat([integer, float].join('.'))
}

export const collectData = async (page: Page, stock: string): Promise<void> => {
  const url = process.env.APP_HELPER_URL

  await page.goto(`${url}/acoes/${stock}`, { waitUntil: 'networkidle0' })

  await page.evaluate(() => {
    const elem: HTMLElement = document
      .querySelector('input[type="checkbox"][name="is-anualy"]') as HTMLElement
    return elem.click()
  }, { timeout: 1000 })

  await page.evaluate(() => {
    const elem: HTMLElement = document
      .querySelector('li[title="Proventos distribuídos nos últimos 5 anos"] > a[role="button"][data-type="1"]') as HTMLElement
    return elem.click()
  }, { timeout: 1000 })

  const dividendRaw = await page.evaluate(() => {
    return document
      .querySelector('span[style="display:block;font-weight: 900;"]')
      .innerHTML
  }, { timeout: 1000 })

  const dividend = parseDividend(dividendRaw)

  console.log({ dividend })
}
