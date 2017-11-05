let TEXT,STRING,INTEGER;_f12‍.w('sequelize',[["TEXT",function(v){TEXT=v}],["STRING",function(v){STRING=v}],["INTEGER",function(v){INTEGER=v}]]);let db;_f12‍.w('../db',[["default",function(v){db=v}]]);


const Source = db.define('source', {
  name: STRING,
  age: INTEGER,
  numExamples: INTEGER
})

_f12‍.d(Source);
