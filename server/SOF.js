const router = require('express').Router()
const api = require('./api')

const stackexchange = require('stackexchange-node')
const sofOptions = { version: 2.2 }
const sofAPI = new stackexchange(sofOptions)

module.exports = router

router.get('/:query', (req, res, next) => {
  const sofFilter = {
    key: 'mky1gCVsFgGKOX7dYZTJPQ((',
    pagesize: 50,
    tagged: `javascript ${req.params.query}`,
    sort: 'activity',
    order: 'asc'
  }

  console.log('\n\nquery filtered with options: ', sofFilter, '\n\n\n')

  sofAPI.questions.questions(sofFilter, (err, res) => {
    if (err) throw err;

    console.log(res.items, '\n\n\n------------------------\n\n')
    console.log(res.has_more, '\n\n\n-----------------------\n\n')
  })
})