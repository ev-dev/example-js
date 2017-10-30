import { makeExecutableSchema } from 'graphql-tools'
import gql from 'graphql-tag'
import resolvers from './resolvers'

const typeDefs = gql`
  type User {
    id: Int
    name: String
    posts: [Post]
  }

  type Post {
    id: Int
    description: String
    imageUrl: String
    votes(count: Int = 0): Int
    author: User
  }

  type Search {
    posts: [Post]
    users: [User]
  }

  type Query {
    allUsers: [User]
    allPosts: [Post]
    getUserById: User
    getPostById: Post
    getUserByName(name: String): [User]
    getPostByTitleOrContent(query: String): [Post]
    searchPostsUsers(query: String): Search
  }

  type Mutation {
    createPost(
      description: String,
      imageUrl: String,
      userId: Int
    ): Post
    createUser(name: String): User
    upvotePost(postId: Int): Post
  }

  type Subscription {
    postAdded(userId: ID!): Post
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`

export default makeExecutableSchema({ typeDefs, resolvers })
