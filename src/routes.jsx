import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodoList from './components/TodoList'
import NewPost from './components/NewPost'
import Search from './components/Search'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={TodoList} />
    <Route exact path='/create' component={NewPost} />
    <Route exact path='/search' component={Search} />
  </Switch>
)

export default Routes