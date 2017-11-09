import axios from 'axios'
import cheerio from 'cheerio'

/* --------- ACTIONS TYPES & CREATORS --------- */
const MDN_LOADING = 'MDN_LOADING'
const MDN_LOADED = 'MDN_LOADED'
const mdnLoaded = () => ({
  type: MDN_LOADED
})


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
export const _fetchResultsMDN = query =>
  dispatch => {
    console.log(`QUERY IN THUNK `, query)
    
    dispatch({ type: MDN_LOADING })
    dispatch(newQuery(query))
    dispatch(getResults([ 'hello', 'world' ]))
    // axios.get(`/api/MDN/${query}`)
    //   .then(res => res.data)
    //   .then(snippets => snippets.mdn_results)
    //   .then(finalArr =>
    //     dispatch(getResults(finalArr)))
    //   .catch(err => console.error('FAIL!', err));
  }

/* --------- REDUCER --------- */
const initialState = {
  isLoading: false,
  queries: [],
  results: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case MDN_LOADING:
      newState.isLoading = true
    case NEW_QUERY:
      newState.queries = [...newState.queries, action.query]
      break
    case GET_RESULTS:
      newState.results = action.results
      newState.isLoading = false
      break
    default:
      return state
  }
  return newState
}

export default reducer
