import { Op } from 'sequelize'
import { _Comment, _User, _Example } from '../../db'
const Comment = {}
  , Query = {}
  , Mutation = {}
  , Resolver = { Query, Mutation, Comment }

// ------ Comment Queries ------ //
Query.comment = async (_, { id }) => _Comment.findById(+id)
    
Query.commentTree = async (_, { rootCommentId, levels }) => {
  let rootComment, rootChildren, deepChildren
  try {
    rootComment = await _Comment.findById(+rootCommentId)
    rootChildren = await rootComment.getChildren()
    deepChildren = await rootChildren.map(child => child.dataValues.id)
  } catch (err) {
    console.error('Error fetching children..', err)
  }
  return {
    parent: rootComment,
    children: rootChildren
  }
}

Query.commentWithChildren = async (_, { id }) =>
  await Promise.all([
    _Comment.findById(+id), 
    _Comment.findAll({ 
      where: {
        parentId: +id
      }
    })
  ])

Query.commentsByExample = async (_, { exampleId }) =>
  _Comment.findAll({
    where: { exampleId: +exampleId },
    include: [{ model: _User, as: 'author' }]
  })
    
Query.commentsByAuthor = async (_, { authorId }) => 
  _Comment.findAll({
    where: { authorId: +authorId },
    include: { model: Example }
  })

Query.childComments = async (_, { parentId }) =>
  _Comment.findAll({
    where: { parentId: +parentId },
    include: [{ model: _User, as: 'author' }]
  })

  
// ------ Comment Type Resolvers ------ //
Comment.children = async comment =>
  _Comment.findAll({ where: { parentId: comment.id } })

Comment.author = async comment =>
  _User.findById(+comment.authorId)

// ------ Comment Mutations ------ //
Mutation.createComment = async (_, ...commentFields) => 
      _Comment.create({ ...commentFields }),

Mutation.deleteComment = async (_, { commentId }) =>
  _Comment.destroy({ 
    where: { id: commentId }, 
    returning: true 
  })

export default Resolver

// NOTE! Possible Define individual fields of _Comment type
// this could allow the "children" field to resolve 
// to an array of _Comments

  // _Comment: {
  //   children: ({ parentId }) => Comment.findAll({
  //     where: { parentId }
  //   })
  // },
