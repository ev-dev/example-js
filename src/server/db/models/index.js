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

Comment.Children = Comment.hasMany(Comment, {
  as: 'children',
  foreignKey: 'childId',
  constraints: false
})

Comment.Parent = Comment.belongsTo(Comment, {
  as: 'parent',
  foreignKey: 'parentId',
  constraints: false
})

export { db as DB, User, Example, Comment, Source }






// import Tag from './Tag'
// Tag.belongsToMany(Example, {
//   as: 'Tag',
//   through: 'ExampleTag',
//   unique: false,
//   constraints: false
// })

// Example.belongsToMany(Tag, {
//   as: 'Example',
//   through: 'ExampleTag',
//   unique: false,
//   constraints: false
// })
