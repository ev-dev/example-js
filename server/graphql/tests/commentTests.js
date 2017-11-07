const testChildren3 = [{ id: 265 }, { id: 553 }, { id: 6994 }, { id: 723}]
const testChildren2 = [{ id: 542, children: testChildren3 }, { id: 31, children: testChildren3 }, { id: 634 }, { id: 293, children: testChildren3 }]
const testChildren = [{ id: 2, children: testChildren2 }, { id: 366, children: testChildren3 }, { id: 3464, children: testChildren2 }, { id: 230, children: testChildren3 }]

// const recursiveChildren = (children) => {
//   for (let i = 0; i < children.length; i++) {
//     if (!children[i].hasOwnProperty('children')) console.log(children[i])
//     else recursiveChildren(children[i])
//   }
// }
// recursiveChildren(testChildren)

const fetchRoot = id => Comment.findById(+id)
const fetchChildren = rootComment => rootComment.getChildren()
const childrenIDs = children => children.map(child => child.dataValues.id)

const recursiveChildren = async children => {
  if (children.length === 1) {
    return await children.getChildren()
  }
  children.forEach(async child => {
    await recursiveChildren(child.slice(1))
  })
}

  fetchRoot(rootCommentId)
    .then(comment => fetchChildren(comment))
    .then(children => childrenIDs(children))
    .then(childrenIDs => fetchGrandChildren(childrenIDs))
