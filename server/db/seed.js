import _ from 'lodash'
import faker from 'faker'
import { blue, green, red } from 'chalk'
import { db, User, Example, Comment } from './models'

const seedDB = (numUsers=20, numExamplesPerUser=15, numCommentsPerExample=10) => {
  console.log(blue('\n  - Seeding Database...'))
  faker.seed(123)
  
  return db.sync({ force: true })
    .then(() => {
      _.times(numUsers, () => {
        const userFirst = faker.name.firstName()
        const userLast = faker.name.lastName()

        return User.create({
          username: faker.internet.userName(userFirst, userLast),
          email: faker.internet.email(userFirst, userLast),
          password: faker.internet.password(),
          fullname: `${userFirst} ${userLast}`,
          profileImgUrl: faker.image.avatar(),
          organization: faker.company.companyName()
        })
          .then(createdUser =>
            _.times(numExamplesPerUser, () => {
              return createdUser.createExample({
                snippet: faker.lorem.paragraph(),
                stars: faker.random.number(150)
              })
                .then(createdExample =>
                  _.times(numCommentsPerExample, i => {
                    return createdExample.createComment({
                      content: faker.lorem.text(),
                      userId: createdUser.id
                    })
                      .then(createdComment)
                  })
                )
            })
          )    
        })
    })
    .then(() => {
      console.log(green.bold('\n  - Seeding Complete.\n'))
    })
    .catch(err => {
      console.error(red('\n  - Error...Problem Seeding DB.\n\n'), err)
    })
}

// export default seedDB
seedDB(20, 15, 7)


