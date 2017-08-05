import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <div>
    <Link to="/">
      <h1 className="side-title">ExampleJS</h1>
    </Link>

    <div className="sidebar-whole">
      <div
        className="button is-info sidebar-btn">
          <span className="side-num">1</span>
          <br />
          <span className="side-src">MDN</span>
      </div>

      <div
        className="button is-danger is-active sidebar-btn">
          <span className="side-num">2</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </div>

      <div
        className="button is-danger sidebar-btn">
          <span className="side-num">3</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </div>

      <div
        className="button is-danger sidebar-btn">
          <span className="side-num">4</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </div>

      <div
        className="button is-danger sidebar-btn">
          <span className="side-num">5</span>
          <br />
          <span className="side-src">StackOverflow</span>
      </div>
    </div>
  </div>
)

export default Sidebar
