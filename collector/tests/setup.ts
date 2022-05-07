const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

interface MockedEnv {
  APP_HELPER_URL: string
}

export default () => {
  const envConfig: MockedEnv = dotenv
    .parse(fs.readFileSync(path.join(__dirname, '.env.test')))

  Object.entries(envConfig)
    .forEach(([key, value]): void => {
      process.env[key] = value
    })
}
