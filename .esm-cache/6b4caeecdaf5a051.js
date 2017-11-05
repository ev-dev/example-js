let STRING,BOOLEAN,VIRTUAL;_daf‍.w('sequelize',[["STRING",function(v){STRING=v}],["BOOLEAN",function(v){BOOLEAN=v}],["VIRTUAL",function(v){VIRTUAL=v}]]);let Comment;_daf‍.w('./Comment',[["default",function(v){Comment=v}]]);let Example;_daf‍.w('./Example',[["default",function(v){Example=v}]]);let db;_daf‍.w('../db',[["default",function(v){db=v}]]);
// import crypto from 'crypto'




const User = db.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    unique: true
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
  // password: VIRTUAL,
  // salt: STRING,
  googleId: STRING,
  githubId: STRING,
  
  profileImgUrl: STRING,
  organization: STRING,
  isPublic: {
    type: BOOLEAN,
    defaultValue: true
  }
}, {
  scopes: {
    full: {
      include: [{
        model: Comment, 
        as: 'author'
      }, {
        model: Example
      }]
    },
    comments: {
      include: [{
        model: Comment,
        as: 'author'
      }]
    },
    examples: {
      include: [{
        model: Example
      }]
    }
  }
})

// User.prototype.checkPswd = function(candidate) {
//   return this.password === User.encryptPassword(candidate, this.salt)
// }

// User.generateSalt = () => crypto
//   .randomBytes(16).toString('base64');

// User.encryptPassword = (plainText, salt) => crypto
//   .createHash('RSA-SHA256')
//   .update(plainText)
//   .update(salt)
//   .digest('hex')

// const setSaltAndPassword = user => {
//   // if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password, user.salt)
//   // }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)

_daf‍.d(User);