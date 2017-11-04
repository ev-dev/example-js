import { TEXT, STRING, INTEGER } from 'sequelize'
import db from '../db'

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

export default Example