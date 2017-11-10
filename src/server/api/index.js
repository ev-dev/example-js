import { Router } from 'express'
import bodyParser from 'body-parser'
import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { merge } from 'lodash'

import _Root, { _User, _Example, _MDN_Example, _Comment } from './types'
import { Users, Examples, MDN_Examples, Comments } from './resolvers'

const schema = makeExecutableSchema({
  typeDefs: [ _Root, _User, _Example, _MDN_Example, _Comment ],
  resolvers: merge(Users, Examples, MDN_Examples, Comments)
})

export default Router()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/graphql', graphqlExpress({ schema }))
  .use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/subscriptions'
  }))
