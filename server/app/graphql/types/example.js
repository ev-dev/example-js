import gql from 'graphql-tag'

export default gql`
  
  type Example {
    id: ID!
    snippet: String!
    stars: Int
    author: User!
  }

  type Query {
    allExamples: [Example]
    getExample(
      id: ID,
      username: String,
      userId: ID
    ): Example
    exampleByUser()
    exampleBySnippet(query: String!): [Example]
  }
`