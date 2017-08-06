import { combineReducers } from 'redux'

import query from './query'
import mdn from './mdn'
// import stackoverflow from './stackoverflow'
// import w3schools from './w3schools'


const rootReducer = combineReducers({
  query,
  mdn
  // stackoverflow,
  // w3schools
})

export default rootReducer
