import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ResultsBox from './ResultsBox'

class ResultPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const query = this.props.match.params.query

    return (
      <div className="white-text">
        <div className="columns">
          <div className="column is-one-third"></div>
          
          <div className="column is-one-third center result-header">
            <h1>Results for <em>{query}</em></h1>

            <ResultsBox />
          </div>
          
          <div className="column is-one-third"></div>
        </div>
      </div>      
    )
  }
}

export default ResultPage
