import db from '../db'
import User from './User'
import Example from './Example'
import Comment from './Comment'

User.hasMany(Example)
Example.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Example.hasMany(Comment)
Comment.belongsTo(Example)

export { db, User, Example, Comment }
