import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const LAST_TEN_EXAMLES = gql` {
  examples(limit: 10) {
    id
    title
    details
    stars
  }
}`

const Home = ({ data: { loading, examples } }) => 
  loading ? <div>Loading...</div> : (
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

export default graphql(LAST_TEN_EXAMLES)(Home)
