const axios = require('axios')
const chalk = require('chalk')
const cheerio = require('cheerio')

const getGOOG = query => {
  axios.get(`https://www.google.com/search?q=javascript+${query}`)
    .then(res => res.data)
    .then(body => cheerio.load(body))
    .then(function ($) {
      console.log('Parsing response...\n\n')

      let goog_results = $('cite').text()
        // .map(function (i, el) {
        //   return $(this).text()
        // })
        // .get()

      // console.log('\nexample snippets are: \n', snippetArr)

      return goog_results
    })
    .then(res => console.log(res))
    .catch(err => console.error('FAIL!', err))
}

getGOOG('recursion')
  // .then(result => console.log(result))
