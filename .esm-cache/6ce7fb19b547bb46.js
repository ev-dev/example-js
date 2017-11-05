let TEXT,ARRAY,STRING;_b54‍.w('sequelize',[["TEXT",function(v){TEXT=v}],["ARRAY",function(v){ARRAY=v}],["STRING",function(v){STRING=v}]]);let db;_b54‍.w('../db',[["default",function(v){db=v}]]);


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

_b54‍.d(Comment);