import { TEXT, ARRAY, STRING } from 'sequelize'
import db from '../db'

const Comment = db.define('comment', {
  content: {
    type: TEXT,
    allowNull: false
  }
})

Comment.prototype.getChildren = function() {
  console.log('COMMENT ID: ', this.id)
  return Comment.findAll({
    where: { parentId: +this.id }
  })
} 

export default Comment