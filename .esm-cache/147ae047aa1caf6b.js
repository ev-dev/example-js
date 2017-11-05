_aa1‍.e([["db",()=>db],["User",()=>User],["Example",()=>Example],["Comment",()=>Comment],["Source",()=>Source]]);let db;_aa1‍.w('../db',[["default",function(v){db=v}]]);let User;_aa1‍.w('./User',[["default",function(v){User=v}]]);let Example;_aa1‍.w('./Example',[["default",function(v){Example=v}]]);let Comment;_aa1‍.w('./Comment',[["default",function(v){Comment=v}]]);let Source;_aa1‍.w('./Source',[["default",function(v){Source=v}]]);





User.hasMany(Example, { foreignKey: 'coderId' })
Example.belongsTo(User, { as: 'coder' })

Source.hasMany(Example)
Example.belongsTo(Source)

User.hasMany(Comment, { foreignKey: 'authorId' })
Comment.belongsTo(User, { as: 'author' })

Example.hasMany(Comment)
Comment.belongsTo(Example)

Comment.Children = Comment.hasMany(Comment, {
  as: 'children',
  foreignKey: 'childId',
  constraints: false
})

Comment.Parent = Comment.belongsTo(Comment, {
  as: 'parent',
  foreignKey: 'parentId', 
  constraints: false 
})


