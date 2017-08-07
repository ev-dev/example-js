'use strict'

const api = require('express').Router()

module.exports = api
  .use('/SOF', require('./SOF'))
  .use('/MDN', require('./MDN.js'))
