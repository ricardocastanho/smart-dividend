import 'dotenv/config'

import { buildBrowser } from './config'
import { collectData } from './collect'

(async (): Promise<void> => {
  const browser = await buildBrowser()
  await collectData(browser)
})()
