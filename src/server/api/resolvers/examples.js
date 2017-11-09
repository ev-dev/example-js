import { Op } from 'sequelize'
import { _Example, _User, _Comment } from '../../db'
const Query = {}, Mutation = {}, Resolver = { Query, Mutation }

// ------ Example Queries ------ //
Query.example = async (_, { id }) =>
  _Example.findById(+id, {
    include: [{
      model: User,
      as: 'coder'
    }, {
      model: Comment
    }]
  })

Query.examples = async (_, { limit, offset, include, tag }) => {
  if (include) 
    return _Example.scope(include).findAll({ limit, offset, tag })
  else if (tag)
    return _Example.findAll({ limit, offset, where: { tag } })
  else
    return _Example.findAll({ limit, offset })
}

Query.examplesByCoder = async (_, { coderId }) =>
  _Example.scope('coder').findAll({
    where: { coderId }
  })

Query.searchExamples = async (_, { query }) =>
  _Example.findAll({
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
    _Example.create({ snippet, coderId })

export default Resolver