import { STRING, BOOLEAN, VIRTUAL } from 'sequelize'
import db from '../db'

const User = db.define('user', {
  alias: {
    type: STRING,
    allowNull: false
  },
  fullname: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password_digest: STRING,

  password: VIRTUAL,

  organization: STRING,

  isPublic: {
    type: BOOLEAN,
    defaultValue: true
  }
})

export default User

