import React, { Component } from 'react'
import { connect } from 'react-redux'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/twilight'

const snippets = {
  fib: `const fib = n => 
\tn < 1 ? 0 : fib(n - 1) + fib(n - 2);`,

  fib2: `function fib(n) {
\tif (n < 1) {
\t\treturn 0;
\t}
\treturn fib(n - 1) + fib(n - 2);
}`,

  push: `['a', 'b'].push('c', 'd');`
}

class AceTextEditor extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    // console.log('change', val)
  }



  render() {
    console.log('ace props', this.props)
    
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

    return (
      <AceEditor
        className="ace-text-area"
        mode="javascript"
        theme="twilight"
        onChange={this.handleChange}
        name="MainEditor"
        fontSize={18}
        value={currentSnippet}
        editorProps={{
          $blockScrolling: true
        }}
      />
    )
  }
}

const mapState = (state, componentProps) => ({
  resultsMDN: state.mdn.results
})

export default connect(mapState)(AceTextEditor)
