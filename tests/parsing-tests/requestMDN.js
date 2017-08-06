const request = require('request-promise-native')
const rp = require('request-promise')
const cheerio = require('cheerio')



const requestMDN = query => {
  const options = {
    uri: `https://mdn.io/${query}`,
    transform: body => cheerio.load(body)
  }
  
  console.log(`\n\nRequest URL:  ${options.uri}.....`, '\n\n')

  request(options)
    .then(function ($) {
      console.log('Parsing response...\n\n')

      let snippetArr = $('#Examples').siblings('pre')
        .map(function(i, el) {
          return $(this).text()
        })
        .get()
      
      console.log('\nexample snippets are: \n', snippetArr)

      return snippetArr
    })
    .then(res => {
      console.log(res)
    })
    // .then(final => console.log(final))
    .catch(err => console.error('FAIL!', err))

}

requestMDN('push')

// request(`http://mdn.io/${query}`)
//   .then(html => console.log(html))
//   .catch(err => console.error('FAIL!', err))


/* <ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul> */