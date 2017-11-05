import { Op } from 'sequelize'
import { Example, User, Comment } from '../../../db/models'

const ExampleResolver = {
  Query: {
    example: async (_, { id }) => 
      Example.findById(+id, {
        include: [{
          model: User,
          as: 'coder'
        }, {
          model: Comment
        }]
      })
    
  , examples: async (_, { limit, offset }) => 
      Example.findAll({ limit, offset })

  , examplesByCoder: async (_, { coderId }) =>
      Example.scope('coder').findAll({
        where: { coderId }
      })


  , searchExamples: async (_, { query }) => 
      Example.findAll({
        where: {
          [Op.or]: {
            snippet: {
              [Op.iLike]: `%${query}%`
            },
            title: {
              [Op.iLike]: `%${query}%`
            },
            details: {
              [Op.iLike]: `%${query}%`
            }
          }
        }
      })
  },

  Mutation: {
    createExample: async (_, { snippet, coderId }) =>
      Example.create({ snippet, coderId })
  }
}

export default ExampleResolver
