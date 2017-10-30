import React from 'react'
import { connect } from 'react-redux'

const Results = ({ isLoading, postResults, userResults }) => {
  console.log('Inside Result Render: ', 'isLoading', isLoading, 'postResults', postResults, 'userResults', userResults)
  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    if (postResults.length > 0 || userResults.length > 0) {
      return (
        <div>
          <h2>Results</h2>
  
          {!!postResults.length &&
            <div>
              <h1>Todos</h1>
              <ul>
                {postResults.map(({ id, description, imageUrl, author }) => (
                  <li key={id}>
                    <h3>Author: {author.name}</h3>
                    <h3>Post: {description}</h3>
                    <img src={imageUrl} />
                  </li>
                ))}
              </ul>
            </div>
          }

          {!!userResults.length &&
            <div>
              <h1>Users</h1>
              <ul>
                {userResults.map(({ id, name }) => (
                  <li key={id}>
                    <h3>User: {name}</h3>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      )
    } else {
      return <h1>No Results Found!</h1>
    }
  }
}

const mapState = ({ isLoading }) => ({ isLoading })

export default connect(mapState)(Results)