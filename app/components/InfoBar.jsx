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
    const { query, src, id } = this.props

    const srcAbrv = ['mdn', 'sof', 'w3c']
    const srcNames = ['Mozilla (MDN)', 'StackOverflow', 'W3Schools']

    console.log('InfoBar props:  ', this.props)
    return (
      <div className="info-main">
        <h3 className="info-title">Abstract</h3>
        <div>
          {collapsed
            ? 
            (<h5>
              Lorem ipsum lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem
              <a onClick={() => this.toggleCollapse()}>
                <em>...more info</em>
              </a>
            </h5>)
            
            : 
            (<h5>
              'Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem lorem lorem ipsum lorem ipsum lorem'
              <a onClick={() => this.toggleCollapse()}>
                <em>...less info</em>
              </a>
            </h5>)
          }
        </div>
        
        <h3 className="link-to-source-title">Link to Source</h3>
        <a className="link-to-source"
          href={src === 'mdn' && `http://mdn.io/${query}`}>
            <em>{srcNames[srcAbrv.indexOf(src)]}</em>
        </a>
      </div>
    )
  }
}

export default InfoBar
