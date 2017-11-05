import gql from 'graphql-tag'
import UserTypes from './User'
import ExampleTypes from './Example'

const CommentTypes = gql`
  type Comment {
    id: ID!
    author: User
    example: Example
    parent: Comment
    content: String!
  }

  type CommentTree {
    parent: Comment
    children: [Comment]
  }

  extend type Query {
    comment(id: ID!): Comment

    commentTree(
      rootCommentId: ID!,
      levels: Int!
    ): CommentTree
    
    commentWithChildren(
      id: ID!
    ): Comment

    commentsByExample(
      exampleId: ID!
    ): [Comment]

    commentsByAuthor(
      authorId: ID!
    ): [Comment]

    childComments(
      parentId: ID!
    ): [Comment]
  }

  extend type Mutation {
    createComment(
      exampleId: ID!,
      authorId: ID!,
      parentId: ID,
      content: String!
    ): Comment

    deleteComment(
      exampleId: ID!,
      authorId: ID!,
      parentId: ID!
    ): Comment
  }
`
export default () => [ CommentTypes, UserTypes, ExampleTypes ]