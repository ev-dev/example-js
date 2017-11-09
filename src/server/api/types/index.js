import gql from 'graphql-tag'

const _Root = gql`
  type Query {
    aNum: Int
  }
  type Mutation {
    noMutate(null: Int): Query
  }
  schema {
    query: Query
    mutation: Mutation
  }
`

export default _Root
export { default as _User } from './_User'
export { default as _Example } from './_Example'
export { default as _Comment } from './_Comment'





















// import gql from 'graphql-tag'

// const typeDefs = gql`
//   type User {
//     id: ID!
//     username: String!
//     fullname: String!
//     email: String!
//     password: String
//     googleId: String
//     githubId: String
//     profileImgUrl: String
//     organization: String
//     isPublic: Boolean
//     examples: [Example!]!
//     comments: [Comment!]!
//   }

//   type Example {
//     id: ID!
//     snippet: String!
//     stars: Int
//     author: User!
//   }

//   type Comment {
//     id: ID!
//     content: String!
//     author: User!
//     parent: Comment
//     children: [Comment]
//   }

//   type Query {
//     allUsers: [User]
//     allExamples: [Examples]
//     getUserById: User
//     getPostById: Post
//     getUserByUsername(username: String!): [User]
//     getExamplesBySnippet(query: String!): []
//     searchPostsUsers(query: String): Search
//   }

//   type Mutation {
//     createPost(
//       description: String,
//       imageUrl: String,
//       userId: Int
//     ): Post
//     createUser(name: String): User
//     upvotePost(postId: Int): Post
//   }

//   type Subscription {
//     postAdded(userId: ID!): Post
//   }

//   schema {
//     query: Query
//     mutation: Mutation
//     subscription: Subscription
//   }
// `

// export default typeDefs
