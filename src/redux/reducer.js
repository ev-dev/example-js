import { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import gql from 'graphql-tag'

import { IS_LOADING, LOAD_ALL_POSTS, NEW_SEARCH, SEARCH_POSTS_USERS, NEW_POST } from './actions'
// import { defaults } from '../../server/config'
// *Fix me --> cannot import config file, breaks build due to subdependcies; move options to actual object-only style config

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql'
    // defaults.database.type === 'Graphcool' 
    //   ? 'https://api.graph.cool/simple/v1/cj9d2661x0wnw0140n5izq5v6'
    //   : 'http://localhost/graphql'
  }),
  cache: new InMemoryCache().restore({})
})

/* ------ Action Creators ------ */
const isLoading = () => ({ type: IS_LOADING })

const loadAllPosts = allPosts => ({
  type: LOAD_ALL_POSTS,
  allPosts
})

const newSearch = query => ({
  type: NEW_SEARCH,
  query
})

const searchPostsUsers = (posts, users) => ({
  type: SEARCH_POSTS_USERS,
  posts,
  users
})

const newPost = post => ({
  type: NEW_POST,
  post
})

/* ------ Thunks ------ */
export const _fetchAllPosts = () =>
  dispatch => {
    dispatch(isLoading())
    client.query({
      query: gql`
        query fetchAllPosts {
          allPosts {
            id
            description
            imageUrl
            author {
              id
              name
            }
          }
        }
      `
    })
      .then(res => res.data.allPosts)
      .then(allPosts => dispatch(loadAllPosts(allPosts)))
      .catch(console.error)
  }

export const _searchPostsUsers = query =>
  dispatch => {
    dispatch(isLoading())
    dispatch(newSearch(query))
    client.query({
      variables: { query },
      query: gql`
        query searchPostsUsers($query: String!) {
          allUsers(filter: {
            name_contains: $query
          }) { id, name }

          allPosts(filter: {
            description_contains: $query
          }) { id, description, imageUrl, author{name} }
        }
      `
    })
      .then(res => res.data)
      .then(({ allUsers, allPosts }) => {
        dispatch(searchPostsUsers(allPosts, allUsers))
      })
      .catch(console.error)
  }


export const _createNewPost = ({ user, content, imageUrl }) =>
  dispatch => {
    client.mutate({
      optimisticResponse: {
        createPost: {
          id: Math.round(Math.random() * -1000000),
          description: content,
          imageUrl: imageUrl,
          name: 'User'
        }
      },
      mutation: gql`
        mutation {
          createPost(
            description: "${content}"
            imageUrl: "${imageUrl}"
            author: { 
              name: "${user}" 
            }
          ) { id, description, imageUrl, author{name} }
        }
      `
    })
      .then(createdPost => {
        console.log('new post in thunk: ', createdPost)
        dispatch(newPost(createdPost))
      })
      .catch(console.error)
  }



/* ------ Reducer ------ */
const initial = {
  isLoading: false,
  allPosts: [],
  searchHistory: [],
  searchResults: { posts: [], users: [] }
}

export default (state = initial, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_ALL_POSTS:
      return {
        ...state,
        allPosts: action.allPosts,
        isLoading: false
      }
    case NEW_SEARCH:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.query]
      }
    case SEARCH_POSTS_USERS:
      return {
        ...state,
        searchResults: {
          posts: action.posts,
          users: action.users
        },
        isLoading: false
      }
    case NEW_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.post]
      }
    default:
      return state
  }
}
