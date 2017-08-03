import React, { Component } from 'react'
import { connect } from 'react-redux'
import Highlight from 'react-highlight'

class ResultsBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article>
        <p className="subtitle source-title">From StackOverflow</p>
        <div className="result-snippet">
          <Highlight className="javascript">
            {`
              ['a', 'b'].push('c')
            `}
          </Highlight>
        </div>
      </article>
    )
  }
}

export default ResultsBox
