import _ from 'lodash'
import faker from 'faker'
import chalk from 'chalk'
import { db, User, Example, Comment, Source } from './models'

const seedConfig = {
  numUsers: 30,
  examplesPerUser: 20,
  totalNumComments: 3000
}

const seedDB = async config => {
  console.log(chalk.blue('\n  - Seeding Database...'))
  faker.seed(123)
  try {
    const dbSync = await db.sync({ force: true })

    const seedUsers = await _.times(config.numUsers, async () => {
      const userFirst = faker.name.firstName()
      const userLast = faker.name.lastName()
      try {
        const newUser = await User.create({
          username: faker.internet.userName(userFirst, userLast),
          fullname: `${userFirst} ${userLast}`,
          email: faker.internet.email(userFirst, userLast),
          password: faker.internet.password(),
          profileImgUrl: faker.image.avatar(),
          organization: faker.company.companyName()
        })
      } catch (err) {
        console.log(err)
      }
    })      

    const totalNumExamples = config.numUsers * config.examplesPerUser
    const seedExamples = await _.times(totalNumExamples, async () => {
      try {
        const newExample = await Example.create({
          coderId: +faker.random.number({ min: 1, max: config.numUsers }),
          title: faker.lorem.slug(5),
          details: faker.lorem.sentences(2),
          snippet: faker.lorem.paragraphs(2),
          stars: +faker.random.number(100)
        }) 
      } catch (err) {
        console.error(err)
      }
    }) 
    
    const seedSubComments = await _.times(config.totalNumComments, async commentId => {
      
        let parentId = +faker.random.number({ min: 1, max: config.totalNumComments })
        let parentIdBackup = +faker.random.number({ min: 1, max: config.totalNumComments })
          
        if (parentId !== commentId) {
          try {
            const newComment = await Comment.create({
              authorId: +faker.random.number({ min: 1, max: config.numUsers }),
              exampleId: +faker.random.number({ min: 1, max: totalNumExamples }),
              parentId: parentId,
              content: faker.lorem.text()
            })
          } catch (err) {
            console.error(err)
          }
        } else if (parentIdBackup !== commentId) {
          console.log('\nWOAH ALMOST GOTTA DUPLICATE\n')
          try {
            const newComment = await Comment.create({
              authorId: +faker.random.number({ min: 1, max: config.numUsers }),
              exampleId: +faker.random.number({ min: 1, max: totalNumExamples }),
              parentId: parentIdBackup,
              content: faker.lorem.text()
            })
          } catch (err) {
            console.error(err)
          }
        } else {
          console.log('\nHOLY SHIT DOUBLE DUPLICATE\n')
        }
    })

    console.log(chalk.green('\n  - Seeding Complete.\n'))
  }
  catch (err) {
    console.error('Final error catch', err)
  }
}

seedDB(seedConfig)
