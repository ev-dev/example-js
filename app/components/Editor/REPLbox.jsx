import React, { Component } from 'react'
import { connect } from 'react-redux'

class REPLbox extends Component {
  constructor(props) {
    super(props)
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
    console.log('   ')
    console.log('   ')

    let expression = new String(currentSnippet)
    // let evaluation = JSON.parse(eval(expression))
    // console.log('evaluation is type: ', typeof evaluation)
    // console.log(evaluation)



    return (
      <div>
        <div className="run-button">
          <button className="button is-warning">
            Run This Snippet
          </button>
        </div>

        <div className="repl-container">
          <div className="repl-box">
            <span className="repl-text">
              -> {eval(expression)}
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
