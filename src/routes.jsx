import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './components'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
)

export default Routes