import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider, graphql, compose } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './styles/index'
import store from './redux'
import Routes from './routes'

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client} >
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)
