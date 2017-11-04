import _ from 'lodash'
import faker from 'faker'
import chalk from 'chalk'
import { db, User, Example, Comment, Source } from './models'

const seedConfig = {
  numUsers: 30,
  examplesPerUser: 20,
  commentsPerExample: 8,
  subCommentsPerComment: 3
}
  
faker.seed(123)

const seedUsers = async numUsers =>
  await _.times(numUsers, async () => {
    const userFirst = faker.name.firstName()
    const userLast = faker.name.lastName()

    await User.create({
      username: faker.internet.userName(userFirst, userLast),
      fullname: `${userFirst} ${userLast}`,
      email: faker.internet.email(userFirst, userLast),
      password: faker.internet.password(),
      profileImgUrl: faker.image.avatar(),
      organization: faker.company.companyName()
    })
  })

const seedExamples = async (numUsers, examplesPerUser) =>
  await _.times(numUsers, async userId => {
    await _.times(examplesPerUser, async () => {
      console.log('i = ', userId)
      await Example.create({
        coderId: userId,
        title: faker.lorem.slug(5),
        details: faker.lorem.sentences(2),
        snippet: faker.lorem.paragraphs(2),
        stars: +faker.random.number(100)
      })
    })
  })

const seedComments = async (totalNumExamples, commentsPerExample, subcomments) =>
  await _.times(totalNumExamples, async exampleId => {
      await _.times(commentsPerExample, async () => {
        await Comment.create({
          coderId: 
        })
      })
    })
  })

const seedAll = config => {
  seedUsers(config.numUsers)
    .then(() => seedExamples(config.examplesPerUser))
    .then(() => seedComments(config.commentsPerExample))
    .then(() => seedComments())
}


const seedConfig = {
  numUsers: 30,
  examplesPerUser: 20,
  commentsPerExample: 8,
  subCommentsPerComment: 3
}
  