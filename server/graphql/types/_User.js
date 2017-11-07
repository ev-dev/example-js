import gql from 'graphql-tag'
import { _Example, _Comment } from '.'

const _User = gql`
  type User {
    id: ID!
    username: String!
    fullname: String!
    email: String!
    password: String
    googleId: String
    githubId: String
    profileImgUrl: String
    organization: String
    isPublic: Boolean
    examples: [Example!]!
    comments: [Comment!]!
  }

  extend type Query {
    user(id: ID!): User
    users: [User]
    userByUsername(username: String!): User
  }

  extend type Mutation {
    createUser(
      username: String!,
      fullname: String!,
      email: String!,
      password: String,
      profileImgUrl: String,
      organization: String
    ): User
  }
`
export default () => [ _User, _Example, _Comment ]