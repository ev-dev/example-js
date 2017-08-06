import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SourceBar = ({query, resultsMDN}) => (
  <div>
    <Link to="/">
      <h1 className="side-title">ExampleJS</h1>
    </Link>

    <div className="sidebar-whole">
      <div>
        <div className="button is-info sidebar-btn">
            <span className="side-src">MDN</span>
        </div>
        <div className="result-link-container">
          {resultsMDN && resultsMDN.map((result, i) => (
            <div key={i + 1}>
              <Link to={`/results/${query}/mdn/${i + 1}`}
                className="result-switch-link">
                  Example #{i + 1}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="button is-danger sidebar-btn">
            <span className="side-src">StackOverflow</span>
        </div>
        {/*

        */}
      </div>

      <div>
        <div className="button is-primary sidebar-btn">
            <span className="side-src">W3Schools</span>
        </div>
        {/*

        */}
      </div>

      <button
        className="button is-warning sidebar-load-more">
        <span className="side-src">Load More Results</span>
      </button>
    </div>
  </div>
)

const mapState = (state, componentProps) => ({
  resultsMDN: state.mdn.results
})

export default connect(mapState)(SourceBar)
