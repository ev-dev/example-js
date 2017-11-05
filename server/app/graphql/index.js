import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

import RootTypes from './types'
import UserTypes from './types/User'
import ExampleTypes from './types/Example'
import CommentTypes from './types/Comment'

import userResolver from './resolvers/user'
import exampleResolver from './resolvers/example'
import commentResolver from './resolvers/comment'

export default makeExecutableSchema({
  typeDefs: [RootTypes, UserTypes, ExampleTypes, CommentTypes],
  resolvers: merge(userResolver, exampleResolver, commentResolver)
})