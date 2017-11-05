import React, { Component } from 'react'
import { connect } from 'react-redux'

import { _createNewPost } from '../redux/reducer'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      content: '',
      imageUrl: ''
    }
  }

  handleChange = ({ value }, field) => {
    const newState = {...this.state}
    newState[field] = value
    this.setState(state => newState)
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const newPost = {
      user: this.state.user,
      content: this.state.content,
      imageUrl: this.state.imageUrl
    }
    console.log('newPost in submit: ', newPost)
    this.props._createNewPost(newPost)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
            <label>User</label>
            <input
              name='user'
              placeholder='User Name Here'
              onChange={({ target }) => this.handleChange(target, 'user')}
            />
            <br />
            <label>Post</label>
            <input
              name='content'
              placeholder='Your Post...'
              onChange={({ target }) => this.handleChange(target, 'content')}
            />
            <br />
            <label>Image</label>
            <input
              name='imageUrl'
              placeholder='Valid ImageURL'
              onChange={({ target }) => this.handleChange(target, 'imageUrl')}
            />
            <br />
            <button type='submit'>Create</button>
        </form>  
      </div>
    )
  }
}

const mapDispatch = { _createNewPost }

export default connect(null, mapDispatch)(NewPost)
