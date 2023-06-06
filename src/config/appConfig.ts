
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const appConfig = {
  baseURI: process.env.BASE_URI || 'http://localhost',
  serverURI: process.env.SERVER_URI || 'http://localhost:3000'
}

console.log(appConfig.baseURI)
console.log(appConfig.serverURI)
