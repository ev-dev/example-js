import React, { Component } from 'react'

class MainSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      queryInputText: ''
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
    console.log('query to submit: ', query)
    
    // THUNK HERE

    this.props.history.push(`/results/${query}`)
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

export default MainSearch
