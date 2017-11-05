import gql from 'graphql-tag'
import CommentTypes from './Comment'
import ExampleTypes from './Example'

const UserTypes = gql`
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
    userByUsername(username: String!): User
    allUsers: [User]
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
export default () => [ UserTypes, ExampleTypes, CommentTypes ]