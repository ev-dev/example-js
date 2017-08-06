import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({query}) => (
  <div>
    <Link to="/">
      <h1 className="side-title">ExampleJS</h1>
    </Link>

    <div className="sidebar-whole">
      <Link to={`/results/${query}/1`}
        className="button is-info sidebar-btn">
          <span className="side-num">1</span>
          <br />
          <span className="side-src">MDN</span>
      </Link>

      <Link to={`/results/${query}/2`}
        className="button is-danger sidebar-btn">
          <span className="side-num">2</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </Link>

      <Link to={`/results/${query}/3`}
        className="button is-primary sidebar-btn">
          <span className="side-num">3</span>
          <br />
          <span className="side-src">w3schools</span>
      </Link>

      <Link to={`/results/${query}/4`}
        className="button is-danger sidebar-btn">
          <span className="side-num">4</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </Link>

      <Link to={`/results/${query}/5`}
        className="button is-danger sidebar-btn">
          <span className="side-num">5</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </Link>

      <button
        className="button is-warning sidebar-load-more">
        <span className="side-src">Load More Results</span>
      </button>
    </div>
  </div>
)

export default Sidebar
