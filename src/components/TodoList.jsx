import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { _fetchAllPosts } from '../redux/reducer'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props._fetchAllPosts()
  }
  
  render() {
    const { isLoading, allPosts } = this.props
    return (
      <div>
        <Link to='/search'>Search For Something...</Link>
        <br />
        <Link to='/create'>New Post</Link>

        <h1>Latest Posts</h1>
        {isLoading ?
          <h1>Loading...</h1>
          : (<ul>
              {allPosts && allPosts.map(({ id, description, imageUrl, author }) => (
                <li key={id}>
                  <h1>{description}</h1>
                  <h4>{author.name}</h4>
                  <img src={imageUrl} />
                </li>
              ))}
            </ul>)
        }    
      </div>
    )
  }
}

const mapState = ({ isLoading, allPosts }) => ({ isLoading, allPosts })
const mapDispatch = { _fetchAllPosts }

export default connect(mapState, mapDispatch)(TodoList)