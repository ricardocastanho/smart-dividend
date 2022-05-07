import { Page } from 'puppeteer'

export const collectData = async (page: Page): Promise<void> => {
  await page.goto(process.env.APP_HELPER_URL)
}
