import express from 'express'
import bodyParser from 'body-parser'
import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import schema from './graphql'
import { initDB, logListen, defaults, isProd } from './config'
// import { seedDB } from './db/seed'
import devRouter from './app/dev'
import prodRouter from './app/prod'
const app = express()

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

isProd 
  ? app.use(prodRouter)
  : app.use(devRouter)

if (defaults.hasSockets) {
  const ws = createServer(app)
  initDB()
    .then(() => {
      ws.listen(3000, () => {
        logListen()

        new SubscriptionServer({
          execute,
          subscribe,
          schema
        }, {
          server: ws, 
          path: '/subscriptions'
        })
      })
    })
    .catch(console.error)
} 
else {
  initDB()
    // .then(() => seedDB())
    // .then(() => console.log('\nSeeded!\n'))
    .then(() => app.listen(defaults.port, logListen))
    .catch(console.error)
}