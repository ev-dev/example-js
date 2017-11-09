import { Op } from 'sequelize'
import { _Example, _User, _Comment } from '../../db'
const Example = {}
  , Query = {}
  , Mutation = {}
  , Resolver = { Query, Mutation, Example }

// ------ Example Type ------ //
Example.comments = async example => 
  _Comment.findAll({ where: { exampleId: example.id } })

Example.coder = async example => _User.findById(+example.coderId)

// ------ Example Queries ------ //
Query.example = async (_, { id }) => _Example.findById(+id)

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

// FIX ME!
Query.examplesByTags = async (_, { tags }) =>
  _Example.findAll({
    where: {
      [Op.contains]: [...tags]
    }
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