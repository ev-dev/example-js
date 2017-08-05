const stackexchange = require('stackexchange-node')
const sofOptions = { version: 2.2 }
const sofAPI = new stackexchange(sofOptions)

const sofFilter = {
  key: 'mky1gCVsFgGKOX7dYZTJPQ((',
  pagesize: 50,
  tagged: ['javascript', 'fibonacci'],
  sort: 'activity',
  order: 'asc'
}

sofAPI.search.search(sofFilter, (err, res) => {
  if (err) throw err;

  console.log(res.items, '\n\n\n------------------------\n\n')
  console.log(res.has_more, '\n\n\n-----------------------\n\n')
})
