import db from '../db'
import User from './User'
import Post from './Post'

User.hasMany(Post)
Post.belongsTo(User)

export { User, Post, db }
