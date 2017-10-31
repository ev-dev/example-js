import { TEXT } from 'sequelize'
import db from '../db'

const Comment = db.define('comment', {
  content: {
    type: TEXT,
    allowNull: false
  }
})

export default Comment