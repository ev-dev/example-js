import { TEXT, STRING, INTEGER } from 'sequelize'
import db from '../db'

const Source = db.define('source', {
  name: STRING,
  age: INTEGER,
  numExamples: INTEGER
})

export default Source
