import _ from 'lodash'
import faker from 'faker'
import chalk from 'chalk'
import { db, User, 
  // Example, Comment, Source 
} from './models'

const seedDB = (numUsers=20, numExamplesPerUser=15, numCommentsPerExample=5) => {
  console.log(chalk.blue('\n  - Seeding Database...'))
  faker.seed(123)
  
  return db.sync({ force: true })
    .then(() => {
      return _.times(numUsers, () => {
        const userFirst = faker.name.firstName()
        const userLast = faker.name.lastName()

        return User.create({
          username: faker.internet.userName(userFirst, userLast),
          fullname: `${userFirst} ${userLast}`,
          email: faker.internet.email(userFirst, userLast),
          password: faker.internet.password(),
          profileImgUrl: faker.image.avatar(),
          organization: faker.company.companyName()
        })
          // .then(createdUser =>
          //   _.times(numExamplesPerUser, () => {
          //     return Example.create({
          //       coderId: +createdUser.id,
          //       title: faker.lorem.slug(5),
          //       details: faker.lorem.sentences(2),
          //       snippet: faker.lorem.paragraphs(2),
          //       stars: +faker.random.number(100),
          //     })
                // .then(createdExample =>
                //   _.times(numCommentsPerExample, i => {
                //     return Comment.create({
                //       authorId: +faker.random.number(numUsers - 1),
                //       exampleId: +createdExample.id,
                //       content: faker.lorem.text()
                //     })
                //       .then(createdComment =>
                //         _.times(3, () => {
                //           return Comment.create({
                //             authorId: +faker.random.number(numUsers - 1),
                //             exampleId: +createdExample.id,
                //             parentId: +createdComment.id,
                //             content: faker.lorem.text()
                //           })
                //         })
                //       )
                //   })
                // )
            // })
          // )
      })
    })
    .then(() => {
      console.log(chalk.green.bold('\n  - Seeding Complete.\n'))
    })
    .catch(err => {
      console.error(chalk.red('\n  - Error...Problem Seeding DB.\n\n'), err)
    })
}

// export default seedDB
seedDB(20, 15, 7)










// const seedUsers = async () => {
//   const allNewUsers = []
//   _.times(numUsers, () => {
//     const userFirst = faker.name.firstName()
//     const userLast = faker.name.lastName()

//     const newUser = await User.create({
//       username: faker.internet.userName(userFirst, userLast),
//       email: faker.internet.email(userFirst, userLast),
//       password: faker.internet.password(),
//       fullname: `${userFirst} ${userLast}`,
//       profileImgUrl: faker.image.avatar(),
//       organization: faker.company.companyName()
//     })
//     allNewUsers.push(newUser)
//   })
//   return allNewUsers
// }

// const seedExamples = async allNewUsers => {
//   allNewUsers.forEach(async user => {
//     await _.times(exPerUser, () => {
//       const newExample = await Example.create({
//         snippet: faker.lorem.paragraph(),
//         stars: faker.random.number(150),
//         userId: +faker.random.number(numUsers - 1)
//       })
//     })
//   })

// const seedComments = await _.times(commPerEx, () => {
//   const newComment = await Comment.create({
//     content: faker.lorem.text(),
//     exampleId: +newExample.id,
//     userId: +faker.random.number(numUsers - 1)
//   }) 
// })

// const seedSubComments = await _.times(faker.random.number(5), 
//   () => {
//     const newSubComment = await Comment.create({
//       content: faker.lorem.text(),
//       userId: +faker.random.number(numUsers - 1),
//       exampleId: +newExample.id,
//       commentId: +newComment.id
//     })
//   }
// )



//     .then(createdUser =>
//       _.times(numExamplesPerUser, () => {
//         return Example.create({
//           snippet: faker.lorem.paragraph(),
//           stars: faker.random.number(150),
//           userId: +createdUser.id
//         })