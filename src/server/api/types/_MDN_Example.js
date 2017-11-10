import gql from 'graphql-tag'

const _MDN_Example = gql`
  type MDN_Example {
    snippet: [String]
  }

  extend type Query {
    searchMDN(query: String!): MDN_Example
  }
`

export default () => [ _MDN_Example ]