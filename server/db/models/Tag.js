// import { STRING, INTEGER, ARRAY } from 'sequelize'
// import Example from './Example'
// import db from '../db'

// const Tag = db.define('tag', {
//   name: {
//     type: STRING,
//     defaultValue: 'JavaScript'
//   }
// })

// Tag.prototype.getAllExamples = function() {
//   return Example.findAll({
//     where: {
//       tags: this.name
//     }
//   })
// }

// Tag.prototype.numExamples = function() {
//   return this.count({ where: { id: this.id } })
// }


// export default Tag