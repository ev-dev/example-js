import { Op } from 'sequelize'
import { PubSub, withFilter } from 'graphql-subscriptions'
// import { User, Post } from '../../../db/models'

const pubsub = new PubSub()

export default {
  Query: {
    allUsers: () => User.findAll(),
    allPosts: () => Post.findAll({ order: [['createdAt', 'DESC']] }),

    getUserById: (_, { id }) => User.findById(id),
    getPostById: (_, { id }) => Post.findById(id),

    getUserByName: (_, { name }) =>
      User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        }
      }),

    getPostByTitleOrContent: (_, { query }) =>
      Post.findAll({
        where: {
          [Op.or]: {
            description: {
              [Op.iLike]: `%${query}%`
            },
            imageUrl: {
              [Op.iLike]: `%${query}%`
            }
          }
        }
      }),

    searchPostsUsers: (_, { query }) =>
      Promise.all([
        Post.findAll({
          where: {
            [Op.or]: {
              description: {
                [Op.iLike]: `%${query}%`
              },
              imageUrl: {
                [Op.iLike]: `%${query}%`
              }
            }
          }
        }),
        User.findAll({
          where: {
            name: {
              [Op.iLike]: `%${query}%`
            }
          }
        })
      ])
        .then(([posts, users]) => ({ posts, users }))
        .catch(console.error)
  },

  Mutation: {
    createUser: (_, { name }) =>
      User.create({ name }),

    createPost: (_, { description, imageUrl, userId }) =>
      Post.create({ description, imageUrl, userId })
        .then(newPost => {
          pubsub.publish('postAdded', {
            postAdded: newPost
          })
          return newPost
        })
        .catch(err => console.error('Error in mutation.', err)),

    upvotePost: (_, { postId }) =>
      Post.findById(+postId)
        .then(post => post.update({ votes: post.votes + 1 }))
  },

  Subscription: {
    postAdded: {
      subscribe: () => pubsub.asyncIterator('postAdded')
    }
  },

  User: {
    posts: user => user.getPosts()
  },

  Post: {
    author: post => post.getUser()
  }

}
