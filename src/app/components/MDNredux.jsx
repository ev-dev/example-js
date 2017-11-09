import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _fetchResultsMDN } from '../redux'

class MDNredux extends Component {
  constructor(props) {
    super(props)
  }

  handleLoad = () => {
    this.props._fetchResultsMDN('splice')
  }

  render() {
    const { results } = this.props
    console.log(`results in render`, results)
    return (
      <div>
        <button onClick={() => this.handleLoad()}>GET RESULTS</button>
        {!!results && results.map(example => (
          <div>
            <h1>Result: {example}</h1>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = ({ mdn }) => ({ results: mdn.results })
const mapDispatch = { _fetchResultsMDN }

export default connect(mapState, mapDispatch)(MDNredux)