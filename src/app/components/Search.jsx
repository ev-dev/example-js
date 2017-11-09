import React, { Component } from 'react'
import { connect } from 'react-redux'

import { _searchPostsUsers } from '../redux/reducer'
import Results from './Results'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      searchRequested: false
    }
  }

  handleChange = ({ target }) => {
    this.setState(state => ({ 
      ...state,
      input: target.value 
    }))
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props._searchPostsUsers(this.state.input)
    this.setState(state => ({
      ...state,
      searchRequested: true
    }))
  }

  render() {
    const { isLoading, postResults, userResults } = this.props
    console.log('postResults', postResults, 'userResults', userResults)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search For Todos & Users:</label>
          <br />
          <input 
            onChange={this.handleChange}
            value={this.state.input}
            placeholder='search...'
          />
          <br />
          <button type='submit'>Go</button>
        </form>

        {this.state.searchRequested &&
          <Results postResults={postResults} userResults={userResults} />
        }
      </div>
    )
  }
}

const mapState = ({ searchResults }) => ({ 
  postResults: searchResults.posts,
  userResults: searchResults.users 
})

const mapDispatch = { _searchPostsUsers }

export default connect(mapState, mapDispatch)(Search)