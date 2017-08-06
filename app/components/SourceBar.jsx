import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SourceBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSource: [true, false, false]
    }
    this.toggleAcitveSource = this.toggleAcitveSource.bind(this)
  }

  toggleAcitveSource(index) {
    const activeState = [...this.state.activeSource]
      .map((item, i) => i === index || false)

    this.setState({ activeSource: activeState })
  }

  render() {
    const { query, resultsMDN } = this.props
    const activeSource = this.state.activeSource

    return (
      <div>
        <Link to="/">
          <h1 className="side-title">ExampleJS</h1>
        </Link>

        <div className="sidebar-whole">

          <div>
            <div className="button is-info sidebar-btn"
              onClick={() => this.toggleAcitveSource(0)}>
                <span className="side-src">MDN</span>
            </div>

            {activeSource[0] &&
              <div className="mdn-results result-link-container">
                {resultsMDN && resultsMDN.map((result, i) => (
                  <div key={i + 1} className="single-link-container">
                    <Link to={`/results/${query}/mdn/${i + 1}`}
                      className="result-switch-link">
                        <em>Example</em>
                        <span className="result-num">#{i + 1}</span>
                    </Link>
                  </div>
                ))}
              </div>
            }
          </div>

          <div>
            <div className="button is-danger sidebar-btn"
              onClick={() => this.toggleAcitveSource(1)}>
              <span className="side-src">StackOverflow</span>
            </div>

            {activeSource[1] &&
              <div className="sof-results result-link-container">
                {resultsMDN && resultsMDN.map((result, i) => (
                  <div key={i + 1} className="single-link-container">
                    <Link to={`/results/${query}/sof/${i + 1}`}
                      className="result-switch-link">
                      <em>Example</em>
                      <span className="result-num">#{i + 1}</span>
                    </Link>
                  </div>
                ))}
              </div>
            }
          </div>

          <div>
            <div className="button is-primary sidebar-btn"
              onClick={() => this.toggleAcitveSource(2)}>
                <span className="side-src">W3Schools</span>
            </div>

            {activeSource[2] &&
              <div className="w3c-results result-link-container">
                {resultsMDN && resultsMDN.map((result, i) => (
                  <div key={i + 1} className="single-link-container">
                    <Link to={`/results/${query}/w3c/${i + 1}`}
                      className="result-switch-link">
                        <em>Example</em>
                        <span className="result-num">#{i + 1}</span>
                    </Link>
                  </div>
                ))}
              </div>
            }
          </div>

          <button
            className="button is-warning sidebar-load-more">
            <span className="side-load-more-text">Load More Results</span>
          </button>
        </div>
      </div>
    )
  }
}
const mapState = (state, componentProps) => ({
  resultsMDN: state.mdn.results
})

export default connect(mapState)(SourceBar)
