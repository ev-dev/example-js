import { User } from '../../../db/models'

const UserResolver = {
  Query: {
    allUsers: async () =>
      User.findAll(),

    user: async (_, { id }) =>
      User.scope('comments').findById(id),

    userByUsername: async (_, { username }) =>
      User.scope('full').findOne({
        where: { username }
      })
  },

  Mutation: {
    createUser: async (_, { username, fullname, email, password, profileImgUrl, organization }) => 
      User.create({
        username,
        fullname,
        email,
        password,
        profileImgUrl,
        organization
      })
  }
}

export default UserResolver
