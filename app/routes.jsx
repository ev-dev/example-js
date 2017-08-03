import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/Home'
import ResultPage from './components/ResultPage'
import NotFound from './components/NotFound'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route path="/results/:query" component={ResultPage} />

    <Route component={NotFound} />
  </Switch>
)
