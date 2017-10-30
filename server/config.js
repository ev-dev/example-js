import { green, yellow, red, blue, cyan } from 'chalk'
import { db } from './db/models'
import { seedDB } from './db/seed'

export const isProd = process.env.NODE_ENV === 'production'

const dbOptions = {
  graphcool: {
    type: 'Graphcool',
    dbUrl: 'https://api.graph.cool/simple/v1/cj9d3ykxr12xb0157q3r06m36'
  },
  local: {
    type: 'Local PostgresSQL',
    dbUrl: `http://localhost:${isProd ? 80 : 3000}/graphiql`
  }
}

export const defaults = {
  pkgName: process.env.npm_package_name,
  baseURL: 'http://localhost:',
  port: isProd ? 80 : 3000,
  database: dbOptions.local, // change DB type here
  hasSockets: true  // setup websockets for GraphQL Subscriptions
}

export const initDB = () =>
  isProd 
    ?
      db.sync({ force: false })
    : 
      defaults.database.type !== 'Graphcool' && seedDB()


export const logListen = (config = defaults) => {
  const { pkgName, baseURL, port, database } = config
    , NAME = red.bold(`[${pkgName.toUpperCase()}]`)
    , FULL_URL = `${cyan.bold(baseURL)}${yellow(port)}`
    , len = pkgName.length
    , bars = len <= 14 ? 44 : len + 26
    , space = len <= 14 ? 22 - len : 4
    , btmSpace = len <= 14 ? 3 : len - 15

  if (isProd)
    console.log(`
      - ${pkgName} > Production Server @ ${baseURL}${port} -
    `)
  else
    console.log(`
          ${'-'.repeat(bars)}
          +   ${NAME}    ${blue.bold('Development')}${' '.repeat(space)}+
          +${' '.repeat(bars - 2)}+
          +   => ${yellow.bold('Listening')} @ ${FULL_URL}${' '.repeat(btmSpace)}+
          ${'-'.repeat(bars)}

          Database:  ${green.bold(database.type)}
          DB URL: ${cyan.bold(database.dbUrl)}
    `)
}