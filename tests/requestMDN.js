const request = require('request-promise-native')
const cheerio = require('cheerio')


const options = {
  uri: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  transform: body => cheerio.load(body)
}


console.log('\nStarting request...\n\n')

request(options)
  .then(function ($) {

  })
  .catch(err => console.error('FAIL!', err))


// BARE REQUEST DUMP
request('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push')
  .then(html => console.log(html))
  .catch(err => console.error('FAIL!', err))

