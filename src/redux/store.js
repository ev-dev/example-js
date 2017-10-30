import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      createLogger({ collapsed: true })
    )
  )
)
