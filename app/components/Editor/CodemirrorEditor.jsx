import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'

class CodemirrorEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "['a', 'b'].push('c', 'd');"
    }
  }

  updateCode(newCode) {
    this.setState({ code: newCode })
  }

  render() {
    const options = {
      lineNumbers: true,
      mode: 'javascript'
    }

    return (
      <CodeMirror
        value={this.state.code}
        onChange={this.updateCode}
        options={options}
      />
    )
  }
}

export default CodemirrorEditor
