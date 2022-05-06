import { Browser } from 'puppeteer'

export const collectData = async (browser: Browser): Promise<void> => {
  const page = await browser.newPage()
  await page.goto(process.env.APP_HELPER_URL)

  await browser.close()
}
