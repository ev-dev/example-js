import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class InfoBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const collapsed = this.state.collapsed
    return (
      <div className="info-main">
        <h3 className="info-title">Abstract</h3>
        <div>
          {collapsed
            ? 
            (<h5>
              Fibonacci is a repeating number sequence that lorem ipsum lorem ipsum lorem
              <a onClick={() => this.toggleCollapse()}>
                <em>...more info</em>
              </a>
            </h5>)
            
            : 
            (<h5>
              'Fibonacci is a repeating number sequence that lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem'
              <a onClick={() => this.toggleCollapse()}>
                <em>...less info</em>
              </a>
            </h5>)
          }
        </div>
        
        <h3 className="link-to-source-title">Link to Source</h3>
        <a className="link-to-source"
          href="https://stackoverflow.com/questions/4926359/javascript-fibonacci-using-closures">
          <em>StackOverflow</em>
        </a>
      </div>
    )
  }
}

export default InfoBar
