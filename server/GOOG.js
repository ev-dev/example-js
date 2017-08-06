
https://www.google.com/search?q=javascript+recursion

const router = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

const api = require('./api')

module.exports = router

router.get('/:query', (req, res, next) => {
  const query = req.params.query

  console.log(`hit /api/GOOG/:query as /api/MDN/${query}`)

  axios.get(`https://www.google.com/search?q=javascript+${query}`)
    .then(res => res.data)
    .then(body => cheerio.load(body))
    .then(function ($) {
      console.log('\nParsing response...\n')
      
      $('#Examples').siblings('pre')

      let goog_results = $('cite._Rm').length
      //   .map(function (i, el) {
      //     return $(this).text()
      //   }).get()

      // res.json({ mdn_results })
    })
    .catch(next);

  // res.send(`/api/MDN/${req.params.query}`)
})
