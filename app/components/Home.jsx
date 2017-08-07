import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchResultsMDN } from '../reducers/mdn'
import Search from './Search'

class Home extends Component {
  constructor(props) {
    super(props)
    this.searchWithPastQuery = this.searchWithPastQuery.bind(this)
  }

  searchWithPastQuery(query) {
    this.props.fetchResultsMDN(query)
    this.history.push(`/results/${query}/mdn/1`)
  }

  render() {
    const { pastQueries } = this.props
    return (
      <div id="app" className="container center">
        <div id="headers">
          <h1 id="title">ExampleJS</h1>
          <h3 id="subtitle">Documentation + Learning Assistant</h3>
          <h5 id="prompt-text">Search for JavaScript topics...</h5>
        </div>
      
        <div className="columns">
          <div className="column is-one-third"></div>
          
          <div className="column is-one-third">
            <Search {...this.props} />

            <div className="history-container">
              <h5 className="history-title">Past Searches</h5>
              <ul>
                {pastQueries && pastQueries.length > 0
                  ? pastQueries.map((query, i) => (
                      <li key={i} className="past-query">
                        <a
                          onClick={()=> this.props.searchWithPastQuery(query)}>
                          {query}
                        </a>
                      </li>
                  ))
                  : (<h6><em>No History Yet...</em></h6>)
                }
              </ul>
            </div>
          </div>
          
          <div className="column is-one-third"></div>
        </div>
        
      </div>
    )
  }
}

const mapState = (state, componentProps) => ({
  pastQueries: state.mdn.queries
})

const mapDispatch = { fetchResultsMDN }

export default withRouter(connect(mapState)(Home))
