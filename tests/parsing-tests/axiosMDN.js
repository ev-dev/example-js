const axios = require('axios')
const chalk = require('chalk')
const cheerio = require('cheerio')


const getMDN = query => {
  const options = {
    method: 'get',
    url: `http://mdn.io/${query}`
  }

  console.log('\n\n   Request URL:  ', chalk.yellow.bold(options.url), '\n\n')
  
  return axios.get(`http://mdn.io/${query}`)
    .then(res => res.data)
    .then(body => cheerio.load(body))
    .then(function($) {
      console.log('Parsing response...\n\n')

      let snippetArr = $('#Examples').siblings('pre')
        .map(function(i, el) {
          return $(this).text()
        })
        .get()
      
      console.log('\nexample snippets are: \n', snippetArr)

      return snippetArr
    })
    .then(res => console.log(res))
    .catch(err => console.error('FAIL!', err))
}

getMDN('push')
  // .then(result => console.log(result))
