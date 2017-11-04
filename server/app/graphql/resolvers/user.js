import { User } from '../../../db/models'

const UserResolver = {
  Query: {
    allUsers: async () =>
      User.findAll(),

    user: async id =>
      User.findById(id),

    userByUsername: async username =>
      User.findOne({
        where: { username }
      })
  },

  Mutation: {
    createUser: async (username, fullname, email, password, profileImgUrl, organization) => 
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
