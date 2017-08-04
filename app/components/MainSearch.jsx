import React, { Component } from 'react'

class MainSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      queryInputText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.authStackOverflow = this.authStackOverflow.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    this.setState({ queryInputText: value })
  }

  handleSubmit() {
    const query = this.state.queryInputText
    console.log('query to submit: ', query)
    
    // THUNK HERE
    this.authStackOverflow()
    this.props.history.push(`/results/${query}`)
  }

  authStackOverflow() {
    SE.authenticate({
      success(data) {
        console.log(
          `User Authorized with account id:  ${data.networkUsers[0].account_id}\n Got access token:  ${data.accessToken}`
        );
      },
      error(data) {
        console.log(`An error occurred:  ${data.errorName}  ${data.errorMessage}\n`);
      },
      networkUsers: true
    });
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
