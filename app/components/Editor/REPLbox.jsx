import React, { Component } from 'react'
import { connect } from 'react-redux'

class REPLbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      executed: ''
    }
    this.executeSnippet = this.executeSnippet.bind(this)
  }

  executeSnippet(snippet) {
    this.setState({ executed: `Oh no! It didn't run!` })
  }

  render() {
    const { src, id } = this.props
    const resultsMDN = this.props.resultsMDN

    const setCurrentSnippet = (source, currID) => {
      if (source === 'mdn') {
        return resultsMDN[currID - 1]
      } else if (source === 'sof') {

      } else if (source === 'w3c') {

      } else {
        throw new Error('Unrecognized route...')
      }
    }

    const currentSnippet = setCurrentSnippet(src, id)
    console.log('type is: ')
    console.log(currentSnippet)

    let resultStr = ''
    const convertEvalToStr = input => {

    }

    let expression = new String(currentSnippet)
    // .replace(/console\.log/g, )
    // let evaluation = JSON.parse(eval(expression))
    // console.log('evaluation is type: ', typeof evaluation)
    // console.log(evaluation)

    return (
      <div>
        <div className="run-button">
          <button 
            className="button is-warning"
            onClick={() => this.executeSnippet()}>
              Run This Snippet
          </button>
        </div>

        <div className="repl-container">
          <div className="repl-box">
            <span className="repl-text">
              -> {this.state.executed}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state, componentProps) => ({
  resultsMDN: state.mdn.results
})

export default connect(mapState)(REPLbox)
