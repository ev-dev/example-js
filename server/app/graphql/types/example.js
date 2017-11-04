import gql from 'graphql-tag'
import UserTypes from './User'
import CommentTypes from './Comment'

const ExampleTypes = gql`
  type Example {
    id: ID!
    coderId: ID!
    title: String
    details: String
    snippet: String!
    stars: Int
  }

  extend type Query {
    example(id: ID!): Example
    examplesByCoder(coderId: ID!): [Example]
    allExamples: [Example]
    searchExamples(
      query: String!
    ): [Example]
  }

  extend type Mutation {
    createExample(
      snippet: String!,
      coderId: ID!
    ): Example
  }
`
export default () => [ ExampleTypes, UserTypes, CommentTypes ]