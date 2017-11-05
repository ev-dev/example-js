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
      }),

    examplesByCoder: async (_, { coderId }) =>
      Example.scope('coder').findAll({
        where: { coderId }
      }),

    allExamples: async () =>
      Example.findAll()
        .then(examples => {
          console.log(`examples FINDALL : \n`, examples)
          return examples
        }),

    searchExamples: async (_, { query }) => 
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
