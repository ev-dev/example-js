import axios from 'axios'
import stackexchange from 'stackexchange'

/* --------- ACTIONS TYPES & CREATORS --------- */
const NEW_QUERY = 'NEW_QUERY'
const newQuery = query => ({
  type: NEW_QUERY,
  query
})

const GET_LAST_FIVE_QUERIES = 'GET_LAST_FIVE_QUERIES'
const getLastFiveQueries = queries => ({
  type: GET_LAST_FIVE_QUERIES,
  queries
})




/* --------- REDUCER --------- */
const initialState = { queries: [] }

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case NEW_QUERY:
      newState.queries = [...newState.queries, action.query]
      break
  }
}

export default reducer
