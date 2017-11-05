import Sequelize from 'sequelize'

const DB_NAME = process.env.npm_package_name

export default new Sequelize(
  `postgres://localhost:5432/${DB_NAME}`, {
    logging: false,
    operatorsAliases: Sequelize.Op,
    native: true
  }
)
