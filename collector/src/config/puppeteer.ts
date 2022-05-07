import puppeteer, { Browser } from 'puppeteer'

export const buildBrowser = async (): Promise<Browser> => {
  return await puppeteer.launch({ headless: false })
}
