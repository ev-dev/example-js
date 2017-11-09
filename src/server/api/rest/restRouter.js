import { Router } from 'express'
import axios from 'axios'
import cheerio from 'cheerio'

export default Router()
  .get('/mdn', (req, res, next) => {
    const query = req.params.query

    axios.get(`http://mdn.io/${query}`)
      .then(res => res.data)
      .then(body => cheerio.load(body))
      .then(function ($) {
        console.log('\nParsing response...\n')

        let mdn_results = $('#Examples')
          .siblings('pre')
          .map(function (i, el) {
            return $(this).text()
          })
          .get()

        res.json({ mdn_results })
      })
      .catch(err => {
        console.log('\n\nCaught Error in MDN Axios Request...\n\n')
        console.error(err)
      });
  })