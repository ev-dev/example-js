import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { ApolloProvider, graphql, compose } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import gql from 'graphql-tag'

import './styles/index'
import store from './redux/store'

import Routes from './routes'
import TodoList from './components/TodoList'
import Search from './components/Search'

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
