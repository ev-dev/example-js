import gql from 'graphql-tag'
import UserTypes from './User'
import ExampleTypes from './Example'

const CommentTypes = gql`
  type Comment {
    id: ID!
    authorId: ID!
    exampleId: ID!
    parentId: ID
    content: String!
    children: [ID]
  }

  extend type Query {
    comment(id: ID!): Comment
    
    commentsByExample(
      exampleId: ID!
    ): [Comment]

    commentsByAuthor(
      authorId: ID!
    ): [Comment]
  }

  extend type Mutation {
    createComment(
      exampleId: ID!,
      authorId: ID!,
      parentId: ID!,
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