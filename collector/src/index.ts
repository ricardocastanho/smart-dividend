import 'dotenv/config'

import { buildBrowser } from './config'
import { collectData } from './collect'

(async (): Promise<void> => {
  const browser = await buildBrowser()

  const page = await browser.newPage()
  await collectData(page, 'PETR4')

  await browser.close()
})()
