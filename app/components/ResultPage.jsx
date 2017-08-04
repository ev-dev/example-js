import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ResultsBox from './ResultsBox'
import AceTextEditor from './Editor/AceTextEditor'
import CodemirrorEditor from './Editor/CodemirrorEditor'
// import QuillEditor from './Editor/QuillEditor'


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
          <div className="column is-one-quarter"></div>

          <div className="column center result-header">
            <h1 className="result-title">Results for <em>{query}</em></h1>

            <AceTextEditor query={query} />

            {/*editMode ? <CodemirrorEditor /> : <ResultsBox />*/}

            {/*
              <button 
                className="button is-warning"
                onClick={() => this.toggleEditMode()}
              >
                {editMode ? 'Back to Results' : 'Edit Code'}
              </button>
            */}

          </div>

          <div className="column is-one-quarter"></div>
        </div>
      </div>      
    )
  }
}

export default ResultPage
