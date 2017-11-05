import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


export const fetchExamples = (limit=10) => graphql(gql`
  query fetchExamples($limit: Int) {
    examples(limit: $limit) {
      id
      title
      details
      stars
      coder {
        username
      }
      snippet
    }
  }`, {
    options: {
      variables: { limit }
    }
  })


export const searchExamples = query => graphql(gql`
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