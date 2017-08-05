import React from 'react'

const Sidebar = () => (
  <div>
    <div
      className="button is-info sidebar-btn">
        <span className="side-num">1</span>
        <br />
        <span className="side-src">MDN</span>
    </div>
    <button
      className="button is-danger sidebar-btn">
        2 - StackOverflow
    </button>
    <button
      className="button is-danger sidebar-btn">
        3 - StackOverflow
    </button>
    <button
      className="button is-danger sidebar-btn">
        4 - StackOverflow
    </button>
    <button
      className="button is-danger sidebar-btn">
        5 - StackOverflow
    </button>
  </div>
)

export default Sidebar
