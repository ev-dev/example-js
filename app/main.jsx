'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// import store from './store'

import Routes from './routes'
// import Footer from './components/Footer'

const Main = () => (
  <div>

    <Routes />

  </div>
)

render(
    <Router>
      <Main />
    </Router>,
  document.getElementById('main')
)

// render(
//   <Provider store={store}>
//     <Router>
//       <Main />
//     </Router>
//   </Provider>,
//   document.getElementById('main')
// )