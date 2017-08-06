import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AceTextEditor from './Editor/AceTextEditor'
import CodemirrorEditor from './Editor/CodemirrorEditor'

import MainSearch from './MainSearch'
import SourceBar from './SourceBar'
import InfoBar from './InfoBar'
import Voting from './Voting'
import Tags from './Tags'

import Sidebar from './Sidebar'

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

    const resultsMDN = this.props.resultsMDN
    console.log('MDN Results:  ', resultsMDN) 
    // console.log('results props:  ', this.props)

    return (
      <div className="white-text">
        <div className="columns">
          <div className="column is-one-quarter sidebar-containter">
            <SourceBar query={query} />
          </div>

          <div className="column is-two-quarters center result-header">
            <div className="result-search">
              <MainSearch />
            </div>

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

const mapState = (state, componentProps) => ({
  resultsMDN: state.mdn.results
})

export default connect(mapState)(ResultPage)

