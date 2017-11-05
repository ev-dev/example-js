import { Comment, User, Example } from '../../../db/models'

const CommentResolver = {
  // Comment: {
  //   children: ({ parentId }) => Comment.findAll({
  //     where: { parentId }
  //   })
  // },

  Query: {
    comment: async (_, { id }, ctx) => {
      console.log(`Root val:  `, _)
      console.log(`Context:  `, ctx)

      return Comment.findById(+id)
    },
    
    commentTree: async (_, { rootCommentId, levels }) => {
      // const fetchRoot = id => Comment.findById(+id)
      // const fetchChildren = rootComment => rootComment.getChildren()
      // const childrenIDs = children => children.map(child => child.dataValues.id)
      
      // const recursiveChildren = async children => {
      //   if (children.length === 1) {
      //     return await children.getChildren()
      //   }
      //   children.forEach(async child => {
      //     await recursiveChildren(child.slice(1))
      //   })
      // }

        // fetchRoot(rootCommentId)
        //   .then(comment => fetchChildren(comment))
        //   .then(children => childrenIDs(children))
        //   .then(childrenIDs => fetchGrandChildren(childrenIDs))

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

    commentWithChildren: async (_, { id }, ctx) =>
      Promise.all([
        Comment.findById(+id), 
        Comment.findAll({ 
          where: {
            parentId: +id
          }
        })
      ]),

    commentsByExample: async (_, { exampleId }) =>
      Comment.findAll({
        where: { exampleId: +exampleId },
        include: [{ model: User, as: 'author' }]
      }),
    
    commentsByAuthor: async (_, { authorId }) => 
      Comment.findAll({
        where: { authorId: +authorId },
        include: { model: Example }
      }),

    childComments: async (_, { parentId }) =>
      Comment.findAll({
        where: { parentId: +parentId },
        include: [{ model: User, as: 'author' }]
      })
  },

  Mutation: {
    createComment: async (_, { exampleId, authorId, parentId, content }) => 
      Comment.create({ exampleId, authorId, parentId, content }),

    deleteComment: async (_, { exampleId, authorId, parentId }) =>
      Comment.destroy({ 
        where: { exampleId, authorId, parentId }
      }, { returning: true })
  }
}

export default CommentResolver
