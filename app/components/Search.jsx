import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchResultsMDN } from '../reducers/mdn'

class MainSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryInputText: '',
      isHomepage: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    this.setState({ queryInputText: value })
  }

  handleSubmit() {
    const query = this.state.queryInputText    
    this.props.fetchResultsMDN(query)  // THUNK

    const uri = this.props.location.pathname
    this.setState({ isHomepage: uri === '/' })

    this.props.history.push(
      this.state.isHomepage
        ? `/results/${query}/mdn/1`
        : `/results/${query}/${src}/${id}`
    )
  }

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input onChange={this.handleChange}
            className="input main-search"
            type="text"
            name="main-search"
            placeholder="ex. Promises or Recursion..."
          />
        </div>

        <div className="control">
          <button
            className="button is-info search-btn"
            onClick={() => this.handleSubmit()}>
              Search
          </button>
        </div>
      </div>
    )
  }
}

const mapState = (state, componentProps) => ({
  resultsMDN: state.mdn.results,
  queriesMDN: state.mdn.queries
})

const mapDispatch = { fetchResultsMDN }

export default withRouter(connect(mapState, mapDispatch)(MainSearch))
