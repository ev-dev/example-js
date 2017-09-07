const router = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

const api = require('./api')

router.get('/:query', (req, res, next) => {
  const query = req.params.query

  axios.get(`http://mdn.io/${query}`)
    // ACTUAL FILE PATH!!
    // .then(res => res.request.path)
    // .then(path => {
    //   console.log('\n\n\n---------------- Redirect Path -----------------')
    //   console.log(path)
    // })

    // MDN RESPONSE
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
    .catch(err => {
      console.log('\n\nCaught Error in MDN Axios Request...\n\n')
      console.error(err)
    });
})

module.exports = router
