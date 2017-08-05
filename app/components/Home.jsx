import React from 'react'
import { Link } from 'react-router-dom'

import MainSearch from './MainSearch'

const Home = props => (
  <div id="app" className="container center">
    <div id="headers">
      <h1 id="title">ExampleJS</h1>
      <h3 id="subtitle">Documentation + Learning Assistant</h3>
      <h5 id="prompt-text">Search for JavaScript topics...</h5>
    </div>
  
    <div className="columns">
      <div className="column is-one-third"></div>
      
      <div className="column is-one-third">
        <MainSearch {...props} />
      </div>
      
      <div className="column is-one-third"></div>
    </div>
    
  </div>
)

export default Home
