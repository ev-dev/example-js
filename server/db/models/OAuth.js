import { STRING, JSON } from 'sequelize'
import db from '../db'

const OAuth = db.define('oauths', {
  uid: {
    type: STRING,
    unique: true
  },
  provider: STRING, 
  accessToken: STRING,
  refreshToken: STRING,
  profileJson: JSON
})

export default OAuth
