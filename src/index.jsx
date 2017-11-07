import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider, graphql, compose } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './styles/index'
import Routes from './routes'

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client} >
    <Router>
      <Routes />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
