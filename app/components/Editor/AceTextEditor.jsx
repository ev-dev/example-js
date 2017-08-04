import React, { Component } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/twilight'

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
        value={`const fib = n => 
\tn < 1 ? 0 : fib(n - 1) + fib(n - 2);`}
        editorProps={{
          $blockScrolling: true
        }}
      />
    )
  }
}

export default AceTextEditor
