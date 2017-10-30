import express from 'express'
import bodyParser from 'body-parser'
import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import schema from './graphql/schema'
import { initDB, logListen, defaults, isProd } from './config'

const app = express()
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

isProd 
  ? app.use(require('./app/prod'))
  : app.use(require('./app/dev'))

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
    .then(() => app.listen(defaults.port, logListen))
    .catch(console.error)
}