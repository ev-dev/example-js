let Sequelize;_aa1‍.w('sequelize',[["default",function(v){Sequelize=v}]]);

const DB_NAME = process.env.npm_package_name

_aa1‍.d(new Sequelize(
  `postgres://localhost:5432/${DB_NAME}`, {
    logging: false,
    operatorsAliases: Sequelize.Op,
    native: true
  }
));
