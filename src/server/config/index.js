
const pkgName = process.env.npm_package_name
  , isProd = process.env.NODE_ENV === 'production'
  , forceSeed = true
  , baseURL = 'http://localhost:'
  , PORT = isProd ? 80 : 3000
  , seedConfig = {
    numUsers: 30,
    examplesPerUser: 20,
    totalNumComments: 3000
  }

export { pkgName, isProd, forceSeed, baseURL, PORT, seedConfig }
export { logger, logListen } from './logger'
export { default as errorHandler } from './error'
export { default as initDB } from './DB'
export { default as seedDB } from './seed'
