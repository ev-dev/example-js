import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, MDNapollo, MDNredux } from './components'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/mdn/apollo' component={MDNapollo} />
    <Route exact path='/mdn/redux' component={MDNredux} />
  </Switch>
)

export default Routes