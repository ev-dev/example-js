import { STRING, BOOLEAN, VIRTUAL } from 'sequelize'
import crypto from 'crypto'
import db from '../db'

const User = db.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: VIRTUAL,
  salt: STRING,
  googleId: STRING,
  githubId: STRING,
  fullname: {
    type: STRING,
    allowNull: false
  },
  profileImgUrl: STRING,
  organization: STRING,
  isPublic: {
    type: BOOLEAN,
    defaultValue: true
  }
})

User.prototype.checkPswd = function(candidate) {
  return this.password === User.encryptPassword(candidate, this.salt)
}

User.generateSalt = () => crypto
  .randomBytes(16).toString('base64');

User.encryptPassword = (plainText, salt) => crypto
  .createHash('RSA-SHA256')
  .update(plainText)
  .update(salt)
  .digest('hex')

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

export default User