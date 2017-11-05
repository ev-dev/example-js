const testChildren3 = [{ id: 265 }, { id: 553 }, { id: 6994 }, { id: 723}]
const testChildren2 = [{ id: 542, children: testChildren3 }, { id: 31, children: testChildren3 }, { id: 634 }, { id: 293, children: testChildren3 }]
const testChildren = [{ id: 2, children: testChildren2 }, { id: 366, children: testChildren3 }, { id: 3464, children: testChildren2 }, { id: 230, children: testChildren3 }]

const recursiveChildren = (children) => {
  for (let i = 0; i < children.length; i++) {
    if (!children[i].hasOwnProperty('children')) console.log(children[i])
    else recursiveChildren(children[i])
  }
}

recursiveChildren(testChildren)