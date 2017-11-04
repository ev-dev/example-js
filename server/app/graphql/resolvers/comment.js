import { Comment } from '../../../db/models'

const CommentResolver = {
  Query: {
    comment: async id =>
      Comment.findById(id),

    commentsByExample: async exampleId =>
      Comment.findAll({
        where: { exampleId }
      }),
    
    commentsByAuthor: async authorId => 
      Comment.findAll({
        where: { authorId }
      })
  },

  Mutation: {
    createComment: async (exampleId, authorId, parentId, content) => 
      Comment.create({ exampleId, authorId, parentId, content }),

    deleteComment: async (exampleId, authorId, parentId) =>
      Comment.destroy({ 
        where: { exampleId, authorId, parentId }
      }, { returning: true })
  }
}

export default CommentResolver
