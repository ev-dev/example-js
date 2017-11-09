import { Op } from 'sequelize'
import { _User, _Example, _Comment } from '../../db'
const User = {}
  , Query = {}
  , Mutation = {}
  , Resolver = { Query, Mutation, User }

// ------ User Queries ------ //
Query.user = async (_, { id }) => 
  _User.findById(+id)

Query.users = async () => 
  _User.findAll()

Query.userByUsername = async (_, { username }) => 
  _User.findOne({
    where: { username }
  })

// ------ User Type Resolvers ------ //
User.examples = async user => 
  _Example.findAll({ where: { coderId: user.id } })

User.comments = async user =>
  _Comment.findAll({ where: { authorId: id } })


// // ------ Example Mutations ------ //
Mutation.createUser = async (_, ...userFields) =>
  _User.create({ ...userFields })



export default Resolver