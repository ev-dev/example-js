const stackexchange = require('stackexchange')

const options = { version: 2.2 }
const context = new stackexchange(options)

const filter = {
  key: 'mky1gCVsFgGKOX7dYZTJPQ((',
  pagesize: 50,
  tagged: 'node.js',
  sort: 'activity',
  order: 'asc'
}

// PROMISIFY ?
context.questions.questions(filter, function(err, res) {
  if (err) throw err;

  console.log(res.items)
  console.log(res.has_more)
})


// KEYS
