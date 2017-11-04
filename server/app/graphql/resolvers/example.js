import { Op } from 'sequelize'
import { Example } from '../../../db/models'

const ExampleResolver = {
  Query: {
    example: async exampleId =>
      Example.findById(exampleId),

    examplesByCoder: async coderId =>
      Example.findAll({ where: {
        coderId
      }}),

    allExamples: async () =>
      Example.findAll(),

    searchExamples: async query =>
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
    createExample: async (snippet, coderId) =>
      Example.create({ snippet, coderId })
  }
}

export default ExampleResolver
