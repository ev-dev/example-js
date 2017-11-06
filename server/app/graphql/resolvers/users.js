import { Op } from 'sequelize'
import { User } from '../../../db/models'
const Query = {}, Mutation = {}, Resolver = { Query, Mutation }

// ------ User Queries ------ //
Query.user = async (_, { id }) => User.scope('comments').findById(id)

Query.users = async () => User.findAll()

Query.userByUsername = async (_, { username }) => 
  User.scope('full').findOne({
    where: { username }
  })

// ------ Example Mutations ------ //
Mutation.createUser = async (_, ...userFields) => 
  User.create({ ...userFields })

export default Resolver