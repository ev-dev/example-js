import { combineReducers } from 'redux'

import query from './query'
// import result from './result'

const rootReducer = combineReducers({
  query,
  // result
})

export default rootReducer
