import React, { Component } from 'react'
import { connect } from 'react-redux'
import Highlight from 'react-highlight'

// import { fetchResultStackOverflow }
// import { fetchResultMDN }

class ResultsBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article>
        <p className="subtitle source-title">From StackOverflow</p>
        <div className="result-snippet">
          <Highlight className="javascript code-snippet">
            {`let letters = ['a', 'b'];
letters.push('c', 'd');

console.log(letters);  // ['a', 'b', 'c', 'd']
`}
          </Highlight>
        </div>
      </article>
    )
  }
}

export default ResultsBox


/* CONNECT TO STORE

const mapState = (state, componentProps) => ({

})

const mapDispatch = {  }

export default connect(mapState, mapDispatch)(ResultsBox)

*/
