import { STRING, TEXT, INTEGER } from 'sequelize'
import db from '../db'

const Post = db.define('post', {
  description: TEXT,
  imageUrl: STRING,
  votes: INTEGER
})

export default Post
