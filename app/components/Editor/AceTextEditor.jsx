import React, { Component } from 'react'
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
    
    return (
      <AceEditor
        className="ace-text-area"
        mode="javascript"
        theme="twilight"
        onChange={this.handleChange}
        name="MainEditor"
        fontSize={18}
        value={snippets.fib2}
        editorProps={{
          $blockScrolling: true
        }}
      />
    )
  }
}

export default AceTextEditor
