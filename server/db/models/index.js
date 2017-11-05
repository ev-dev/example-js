import db from '../db'
import User from './User'
import Example from './Example'
import Comment from './Comment'
import Source from './Source'


User.hasMany(Example, { 
  foreignKey: 'coderId',
  constraints: false
})
Example.belongsTo(User, { 
  as: 'coder',
  constraints: false
})


User.hasMany(Comment, {
  foreignKey: 'authorId',
  constraints: false
})
Comment.belongsTo(User, { 
  as: 'author',
  constraints: false
})


Comment.Child = Comment.hasMany(Comment, {
  as: 'child',
  foreignKey: 'childId',
  constraints: false
})
Comment.Parent = Comment.belongsTo(Comment, {
  as: 'parent',
  foreignKey: 'parentId', 
  constraints: false 
})


Example.hasMany(Comment)
Comment.belongsTo(Example)

Source.hasMany(Example)
Example.belongsTo(Source)



export { db, User, Example, Comment, Source }



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
