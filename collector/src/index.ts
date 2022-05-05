import 'dotenv/config'
import puppeteer from 'puppeteer'

(async (): Promise<void> => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(process.env.APP_HELPER_URL)

  await browser.close()
})()
