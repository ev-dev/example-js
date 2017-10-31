import _ from 'lodash'
import faker from 'faker'
import { blue, green, red } from 'chalk'
import { db, User, Post } from './models'

const seed = () => {
  console.log(blue('\n  - Seeding Database...'))
  faker.seed(123)

  return db.sync({ force: true })
    .then(() =>
      _.times(20, () => {
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
          createdUser.createExample({
            snippet: faker.lorem.paragraph(),
            stars: faker.random.number(150)
          }))
          .then(createdExample => 
            createdExample.createComment({
              content: faker.lorem.text()
            }))
      }))
    .then(() => {
      console.log(green.bold('\n  - Seeding Complete.\n'))
    })
    .catch(err => {
      console.error(red('\n  - Error...Problem Seeding DB.\n\n'), err)
    })
}

seed()
