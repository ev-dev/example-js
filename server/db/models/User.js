import { STRING } from 'sequelize'
import db from '../db'

const User = db.define('user', {
  name: STRING
})

export default User

