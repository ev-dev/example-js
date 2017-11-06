import { Op } from 'sequelize'
import { Comment, User, Example } from '../../../db/models'
const Query = {}, Mutation = {}, Resolver = { Query, Mutation }

// ------ Comment Queries ------ //
Query.comment = async (_, { id }) => Comment.findById(+id)
    
Query.commentTree = async (_, { rootCommentId, levels }) => {
  let rootComment, rootChildren, deepChildren
  try {
    rootComment = await Comment.findById(+rootCommentId)
    rootChildren = await rootComment.getChildren()
    deepChildren = await rootChildren.map(child => child.dataValues.id)
  } catch (err) {
    console.error('Error fetching children..', err)
  }
  return {
    parent: rootComment,
    children: rootChildren
  }
},

Query.commentWithChildren = async (_, { id }) =>
  await Promise.all([
    Comment.findById(+id), 
    Comment.findAll({ 
      where: {
        parentId: +id
      }
    })
  ]),

Query.commentsByExample = async (_, { exampleId }) =>
  Comment.findAll({
    where: { exampleId: +exampleId },
    include: [{ model: User, as: 'author' }]
  }),
    
Query.commentsByAuthor = async (_, { authorId }) => 
  Comment.findAll({
    where: { authorId: +authorId },
    include: { model: Example }
  }),

Query.childComments = async (_, { parentId }) =>
  Comment.findAll({
    where: { parentId: +parentId },
    include: [{ model: User, as: 'author' }]
  })

// ------ Comment Mutations ------ //
Mutation.createComment = async (_, ...commentFields) => 
      Comment.create({ ...commentFields }),

Mutation.deleteComment = async (_, { commentId }) =>
  Comment.destroy({ 
    where: { id: commentId }, 
    returning: true 
  })

export default Resolver

// NOTE! Possible Define individual fields of _Comment type
// this could allow the "children" field to resolve 
// to an array of Comments

  // Comment: {
  //   children: ({ parentId }) => Comment.findAll({
  //     where: { parentId }
  //   })
  // },
