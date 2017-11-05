let TEXT,STRING,INTEGER;_aa1‍.w('sequelize',[["TEXT",function(v){TEXT=v}],["STRING",function(v){STRING=v}],["INTEGER",function(v){INTEGER=v}]]);let User;_aa1‍.w('./User',[["default",function(v){User=v}]]);let Comment;_aa1‍.w('./Comment',[["default",function(v){Comment=v}]]);let db;_aa1‍.w('../db',[["default",function(v){db=v}]]);




const Example = db.define('example', {
  title: STRING,
  details: TEXT,
  snippet: {
    type: TEXT,
    allowNull: false
  },
  stars: {
    type: INTEGER,
    defaultValue: 0
  }
})
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

_aa1‍.d(Example);