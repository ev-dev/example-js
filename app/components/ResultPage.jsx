import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import AceTextEditor from './Editor/AceTextEditor'
import REPLbox from './Editor/REPLbox'

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
    const { isLoading } = this.props

    return (
      <div className="white-text">
        <div className="columns">
          <div className="column is-one-quarter sidebar-containter">
            <SourceBar query={query} />
            <Voting />
            <Tags />
          </div>

          <div className="column center main-container">
            <div className="result-search">
              <Search />
            </div>

            {isLoading
              ? ( <div>
                    <h1 className="result-title"><em>Loading Results...</em></h1>
                    <div className="button is-large is-dark is-loading spinner"></div>
                  </div> )

              : ( <div>
                    <h1 className="result-title">Results for "<em>{query}</em>"</h1>
                    <AceTextEditor query={query} src={src} id={id} />
                    
                    <REPLbox query={query} src={src} id={id} />

                    <h5 className="disclaimer-title">
                      Disclaimer
                    </h5>
                    <h6 className="disclaimer">
                      This project is still in its early phases so please note that not every example is garunteed.
                    </h6>
                  </div> )
            }
          </div>

          <div className="column righthand-spacer">
            <img className="github-icon"
              src="/images/github_icon.png" />
          </div>
          {/*
          <div className="column is-one-quarter">
            <InfoBar query={query} src={src} id={id} />
          </div>
          */}

        </div>
      </div>      
    )
  }
}

const mapState = (state, componentProps) => ({
  isLoading: state.mdn.isLoading
})

export default withRouter(connect(mapState)(ResultPage))
