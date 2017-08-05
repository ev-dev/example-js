import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AceTextEditor from './Editor/AceTextEditor'
import CodemirrorEditor from './Editor/CodemirrorEditor'

import Sidebar from './Sidebar'
import InfoBar from './InfoBar'
import Voting from './Voting'
import Tags from './Tags'

class ResultPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false
    }
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode })
  }

  render() {
    const query = this.props.match.params.query
    const editMode = this.state.editMode

    return (
      <div className="white-text">
        <div className="columns">
          <div className="column is-one-quarter">
            <Sidebar query={query} />
          </div>

          <div className="column is-two-quarters center result-header">
            <h1 className="result-title">
              Results for "<em>{query}</em>"
            </h1>

            <AceTextEditor query={query} />
            
            <Voting />
            
            <Tags />
          </div>

          <div className="column is-one-quarter">
            <InfoBar {...this.props} />
          </div>
        </div>
      </div>      
    )
  }
}

export default ResultPage
