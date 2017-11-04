import db from '../db'
import User from './User'
import Example from './Example'
import Comment from './Comment'
import Source from './Source'

User.hasMany(Example, { foreignKey: 'coderId' })
Example.belongsTo(User, { as: 'coder' })

Source.hasMany(Example)
Example.belongsTo(Source)

User.hasMany(Comment, { foreignKey: 'authorId' })
Comment.belongsTo(User, { as: 'author' })

Example.hasMany(Comment)
Comment.belongsTo(Example)

Comment.belongsTo(Comment, {
  foreignKey: 'parentId', 
  constraints: false 
})

export { db, User, Example, Comment, Source }
