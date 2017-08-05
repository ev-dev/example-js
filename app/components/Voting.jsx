import React from 'react'

const Voting = props => (
  <div>
    <div className="vote-title">
      <span>Vote for this snippet!</span>
    </div>

    <div className="vote-buttons">
      <div className="button is-danger vote-btn">
        <span><i className="fa fa-thumbs-down"></i></span>
        -1
      </div>
      
      <div className="button is-success vote-btn">
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        +1
      </div>
    </div>
  </div>
)

export default Voting
