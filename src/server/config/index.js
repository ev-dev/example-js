
const pkgName = process.env.npm_package_name
  , isProd = process.env.NODE_ENV === 'production'
  , forceSeed = true
  , baseURL = 'http://localhost:'
  , PORT = isProd ? 80 : 3000
  , hasSockets = true  // setup websockets for GraphQL Subscriptions
  , dbConfig = {
      forceSeed: false,
      seedConfig: {
        numUsers: 30,
        examplesPerUser: 20,
        totalNumComments: 3000
      },
      graphcool: {
        type: 'Graphcool',
        dbUrl: 'https://api.graph.cool/simple/v1/cj9d3ykxr12xb0157q3r06m36'
      },
      local: {
        type: 'Local PostgresSQL',
        dbUrl: `http://localhost:${isProd ? 80 : 3000}/graphiql`
      }
    }
  , database = dbConfig.local // change DB type here

export { pkgName, isProd, baseURL, PORT, dbConfig, database }
export { logger, logListen } from './logger'
export { default as errorHandler } from './error'
export { default as initDB } from './DB'
export { default as seedDB } from './seed'
