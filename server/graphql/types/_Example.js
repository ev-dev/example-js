import gql from 'graphql-tag'
import { _User, _Comment } from '.'

const _Example = gql`
  type Example {
    id: ID!
    title: String
    details: String
    tags: [String]
    snippet: String!
    stars: Int
    coder: User
    comments: [Comment]
  }

  extend type Query {
    example(id: ID!): Example
    
    examples(limit: Int, offset: Int): [Example]

    examplesByCoder(coderId: ID!): [Example]
    
    searchExamples(query: String!): [Example]
  }

  extend type Mutation {
    createExample(
      snippet: String!,
      coderId: ID!
    ): Example
  }
`

export default () => [ _Example, _User, _Comment ]