const request = require('request-promise-native')
const cheerio = require('cheerio')


const options = {
  uri: 'http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call/14220323#14220323',
  transform: body => cheerio.load(body)
}


console.log('\nStarting request...\n\n')

request(options)
  .then(function($) {
    
  })
  .catch(err => console.error('FAIL!', err))


// BARE REQUEST DUMP
// request('http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call/14220323#14220323')
//   .then(html => console.log(html))
//   .catch(err => console.error('FAIL!', err))

