import { Op } from 'sequelize'
import { Example, User, Comment } from '../../../db/models'
const Query = {}, Mutation = {}, Resolver = { Query, Mutation }

// ------ Example Queries ------ //
Query.example = async (_, { id }) =>
  Example.findById(+id, {
    include: [{
      model: User,
      as: 'coder'
    }, {
      model: Comment
    }]
  })

Query.examples = async (_, { limit, offset, include, tag }) => {
  if (include) 
    return Example.scope(include).findAll({ limit, offset, tag })
  else if (tag)
    return Example.findAll({ limit, offset, where: { tag } })
  else
    return Example.findAll({ limit, offset })
}

Query.examplesByCoder = async (_, { coderId }) =>
  Example.scope('coder').findAll({
    where: { coderId }
  })

Query.searchExamples = async (_, { query }) =>
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

// ------ Example Mutations ------ //
Mutation.createExample = async (_, { snippet, coderId }) =>
    Example.create({ snippet, coderId })

export default Resolver