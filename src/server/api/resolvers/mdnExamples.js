import axios from 'axios'
import cheerio from 'cheerio'

const MDN_Example = {}
  , Query = {}
  , Mutation = {}
  , Resolver = { Query, Mutation, MDN_Example }

// MDN_Example.snippet = async mdnExample => 

// ------ MDN_Example Type ------ //
// Example.comments = async example => 
//   _Comment.findAll({ where: { exampleId: example.id } })

// Example.coder = async example => _User.findById(+example.coderId)

// ------ MDN_Example Queries ------ //
// Query.searchMDN = (_, { query }) => {
//   console.log(`About to hit external API with query = `, query)
  
//   return axios.get(`http://mdn.io/${query}`)
//     .then(res => {
//       return res.data
//     })
//     .then(body => cheerio.load(body))
//     .then(function($) {
//       console.log('\nParsing response...\n')

//       let mdn_results = $('#Examples').siblings('pre')
//         .map(function(i, el) {
//           return $(this).text()
//         }).get()
        
//       res.json({ mdn_results })
//     })
//     .catch(err => {
//       console.log('\n\nCaught Error in MDN Axios Request...\n\n')
//       console.error(err)
//     })
// }

Query.searchMDN = async (_, { query }) => {
  try {
    console.log(`About to hit external API!`)
    
    const mdnPage = await axios.get(`http://mdn.io/${query}`)
    console.log(`mdnPage = `, mdnPage.data)
    
    const $ = await cheerio.load(mdnPage.data)
    return await $('#Examples').siblings('pre').map(function(i, el) {
      // console.log(`Inside #Examples.map el = `, el)      
      return $(this).text()
    }).get()
  } catch (err) {
    console.error('Error loading MDN Results...', err)
  }
}

export default Resolver