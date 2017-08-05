const router = require('express').Router()
const api = require('./api')

module.exports = router

router.get('/:query', (req, res, next) => {
  console.log(`hit /api/MDN/:query as /api/MDN/${req.params.query}`)
  res.send(`/api/MDN/${req.params.query}`)
})