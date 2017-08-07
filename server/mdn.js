const router = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

const api = require('./api')


router.get('/:query', (req, res, next) => {
  const query = req.params.query

  console.log(`hit /api/MDN/:query as /api/MDN/${query}`)

  axios.get(`http://mdn.io/${query}`)
    .then(res => res.data)
    .then(body => cheerio.load(body))
    .then(function($) {
      console.log('\nParsing response...\n')

      let mdn_results = $('#Examples').siblings('pre')
        .map(function(i, el) {
          return $(this).text()
        }).get()
        
      res.json({ mdn_results })
    })
    .catch(next);

  // res.send(`/api/MDN/${req.params.query}`)
})

module.exports = router