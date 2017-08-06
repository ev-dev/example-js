const router = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

const api = require('./api')

module.exports = router

router.get('/:query', (req, res, next) => {
  const query = req.params.query

  console.log(`hit /api/MDN/:query as /api/MDN/${query}`)

  axios.get(`http://mdn.io/${query}`)
    .then(res => res.data)
    .then(body => cheerio.load(body))
    .then(function($) {
      console.log('Parsing response...\n\n')

      let mdn_results = $('#Examples').siblings('pre')
        .map(function(i, el) {
          return $(this).text()
        })
        .get()
                
      console.log('\nexample snippets are: \n', mdn_results)

      res.json({ mdn_results })
    })
    .catch(next);

  // res.send(`/api/MDN/${req.params.query}`)
})
