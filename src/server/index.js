import express from 'express'

import { devRouter, prodRouter } from './app'
import apiRouter from './api'
import {
  isProd,
  PORT, 
  initDB, 
  logListen, 
  errorHandler 
} from './config'

try {
  initDB()
} catch (err) {
  console.error('Error Syncing DB...\n', err)
} finally {
  express()
    .use(isProd ? prodRouter : devRouter)
    .use(apiRouter)
    .use(errorHandler)
    .listen(PORT, logListen)
}
