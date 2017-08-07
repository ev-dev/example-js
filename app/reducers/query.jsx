/* --------- ACTIONS TYPES & CREATORS --------- */

const NEW_QUERY = 'NEW_QUERY'
export const newQuery = query => ({
  type: NEW_QUERY,
  query
})

const GET_LAST_FIVE_QUERIES = 'GET_LAST_FIVE_QUERIES'
export const getLastFiveQueries = () => ({
  type: GET_LAST_FIVE_QUERIES
})


/* --------- REDUCER --------- */
const initialState = { queries: [], lastFive: [] }

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case NEW_QUERY:
      newState.queries = [...newState.queries, action.query]
      break
    case GET_LAST_FIVE_QUERIES:
      newState.lastFive = state.queries.slice(0, 5)
    default:
      return state
  }
  return newState
}

export default reducer
