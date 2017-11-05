import { Op } from 'sequelize'
import { Example, User, Comment } from '../../../db/models'

const example = async (_, { id }) =>
  Example.findById(+id, {
    include: [{
      model: User,
      as: 'coder'
    }, {
      model: Comment
    }]
  })

// const examples = async (_, { limit=20, offset=0, include='', coder='', tag='' }) => {


const examples = async (_, { limit, offset, include, tag }) => {
  if (include) 
    return Example.scope(include).findAll({ limit, offset, tag })
  else if (tag)
    return Example.findAll({ limit, offset, where: { tag } })
  else
    return Example.findAll({ limit, offset })
}

const examplesByCoder = async (_, { coderId }) =>
  Example.scope('coder').findAll({
    where: { coderId }
  })

const searchExamples = async (_, { query }) =>
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

const ExampleResolver = {
  Query: { 
    example,
    examples,
    examplesByCoder,
    searchExamples
  },

  Mutation: {
    createExample: async (_, { snippet, coderId }) =>
      Example.create({ snippet, coderId })
  }
}

export default ExampleResolver
