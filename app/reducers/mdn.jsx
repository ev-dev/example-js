import axios from 'axios'
import cheerio from 'cheerio'

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

const GET_RESULTS = 'GET_RESULTS'
const getResults = results => ({
  type: GET_RESULTS,
  results
})

/* --------- THUNKS --------- */
export const fetchResultsMDN = query =>
  dispatch => 
    axios.get(`/api/MDN/${query}`)
      .then(res => res.data)
      .then(snippets => snippets.mdn_results)
      .then(finalArr =>
        dispatch(getResults(finalArr)))
      .catch(err => console.error('FAIL!', err));


/* --------- REDUCER --------- */
const initialState = { queries: [], results: [] }

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case NEW_QUERY:
      newState.queries = [...newState.queries, action.query]
      break
    case GET_RESULTS:
      newState.results = action.results
      break
    default:
      return state
  }
  return newState
}

export default reducer
