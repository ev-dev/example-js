import { TEXT, STRING, INTEGER, ARRAY, ENUM, Op } from 'sequelize'
import User from './User'
import Comment from './Comment'
import db from '../db'

const Example = db.define('example', {
  title: STRING,
  details: TEXT,
  snippet: TEXT,
  stars: {
    type: INTEGER,
    defaultValue: 0
  },
  status: ENUM('Verified', 'Not Verified'),
  tags: {
    type: ARRAY(STRING),
    defaultValue: ['JavaScript'],
    set(tags) {
      if (tags === 'string') {
        let trimmedTags = tags.split(',').map(str => str.trim())
        this.setDataValue('tags', trimmedTags)
      } else {
        this.setDataValue('tags', tags)
      }
    }
  }
})


Example.findByTag = function(tag) {
  return this.findAndCountAll({
    where: {
      tags: { [Op.contains]: [tag] } 
    }
  })
}

Example.totalNumExamples = function() {
  return this.count()
}

Example.prototype.findSimilar = function() {
  return Example.findAll({
    where: {
      id: { [Op.ne]: this.id },
      tags: { [Op.overlap]: this.tags }
    }
  })
}

Example.prototype.createTag = function(tagName) {
  this.addTag({ name: tagName })
  // Tag.create({ name: tagName, exampleId: this.id })
  //   .then()
}






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