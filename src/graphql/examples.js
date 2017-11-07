import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export const _fetchExamples = (limit=10) => graphql(gql`
  query fetchExamples {
    examples {
      id
      title
      details
      stars
      coder {
        username
      }
      snippet
    }
  }`)


export const _searchExamples = query => graphql(gql`
  query findExamples($query: String!) {
    searchExampes($query: String!) {
      title,
      details,
      stars 
      coder {
        username
      }
      snippet
    }  
  }`, { 
    options: {
      variables: { query } 
    }
})