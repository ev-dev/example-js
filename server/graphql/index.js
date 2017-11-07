import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

import _Root, { _User, _Example, _Comment } from './types'
import { Users, Examples, Comments } from './resolvers'

export default makeExecutableSchema({
  typeDefs: [ _Root, _User, _Example, _Comment ],
  resolvers: merge(Users, Examples, Comments)
})