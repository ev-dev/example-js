import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Home = ({ data: { examples } }) => (
  <div>
    <h1>Last 10 Examples...</h1>
    <h3>Ordered from newest first.</h3>

    {examples && examples.map(example => (
      <div key={example.id}>
        <h2>Sippet Title:</h2>
        <h4>{example.title}</h4>
        
        <h2>Stars: {example.stars}</h2>
        
        <h2>Snippet Description:</h2>
        <h4>{example.details}</h4>
      </div>
    ))}
  </div>
)

const withExamples = graphql(gql`
  query fetchExamples($limit: Int) {
    examples(last:$limit) {
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
      variables: { limit: 10 }
    }
  })

const HomeWithData = withExamples(Home)
export default HomeWithData
