import { Router } from 'express'
import bodyParser from 'body-parser'
import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { merge } from 'lodash'

import _Root, { _User, _Example, _Comment } from './types'
import { Users, Examples, Comments } from './resolvers'

const schema = makeExecutableSchema({
  typeDefs: [ _Root, _User, _Example, _Comment ],
  resolvers: merge(Users, Examples, Comments)
})

export default Router()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/graphql', graphqlExpress({ schema }))
  .use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/subscriptions'
  }))
