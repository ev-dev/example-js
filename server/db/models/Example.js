import { TEXT, STRING, INTEGER } from 'sequelize'
import User from './User'
import Comment from './Comment'
import db from '../db'

const Example = db.define('example', {
  title: STRING,
  details: TEXT,
  snippet: {
    type: TEXT,
    allowNull: false
  },
  stars: {
    type: INTEGER,
    defaultValue: 0
  }
})
// , {
//   scopes: {
//     full: {
//       include: [{
//         model: User,
//         as: 'coder'
//       }, {
//         model: Comment
//       }]
//     },
//     coder: {
//       include: [{
//         model: User,
//         as: 'coder'
//       }]
//     },
//     comments: {
//       include: [{
//         model: Comment
//       }]
//     }
//   }
// })

export default Example