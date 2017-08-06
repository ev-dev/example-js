import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import AceTextEditor from './Editor/AceTextEditor'
import CodemirrorEditor from './Editor/CodemirrorEditor'

import Search from './Search'
import SourceBar from './SourceBar'
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
    const editMode = this.state.editMode
    
    console.log('resultpage props -- look for match params\n', this.props)

    const { query, src, id } = this.props.match.params
    const { mdn } = this.props

    return (
      <div className="white-text">
        <div className="columns">
          <div className="column is-one-quarter sidebar-containter">
            <SourceBar query={query} />
          </div>

          <div className="column is-two-quarters center result-header">
            <div className="result-search">
              <Search />
            </div>

            {mdn.isLoading
              ? ( <div>
                    <h1 className="result-title"><em>Loading Results...</em></h1>
                    <div className="button is-large is-dark is-loading spinner"></div>
                  </div> )

              : ( <div>
                    <h1 className="result-title">Results for "<em>{query}</em>"</h1>
                    <AceTextEditor query={query} src={src} id={id} />
                    <Voting />  
                    <Tags />
                  </div> )
            }
          </div>

          <div className="column is-one-quarter">
            <InfoBar query={query} src={src} id={id} />
          </div>
        </div>
      </div>      
    )
  }
}

const mapState = (state, componentProps) => ({
  mdn: state.mdn
})

export default connect(mapState)(ResultPage)

