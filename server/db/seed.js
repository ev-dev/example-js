import _ from 'lodash'
import casual from 'casual'
import { blue } from 'chalk'
import { db, User, Post } from './models'

export default () => {
  console.log(blue('\n  - Seeding Database...'))
  casual.seed(123)

  return db.sync({ force: true })
    .then(() =>
      _.times(10, () =>
        User.create({
          name: casual.first_name
        })
          .then(createdUser =>
            createdUser.createPost({
              description: `Post by ${createdUser.name}  ---------  ${casual.sentences(3)}`,
              imageUrl: casual.url,
              votes: casual.integer(0, 1000)
            }))
      ))
    .catch(err => {
      console.error('Error...Problem Seeding DB.')
    })
}