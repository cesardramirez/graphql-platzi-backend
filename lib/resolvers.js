'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query.
module.exports = {
  Query: {
    courses: async () => {
      let db; let courses = []
      try {
        db = await connectDB()
        courses = await db.collection('courses').find().toArray()
      } catch (error) {
        console.error(error)
      }
      return courses
    },
    course: async (root, { id }) => {
      let db; let course = []
      try {
        db = await connectDB()
        course = await db.collection('courses').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.error(error)
      }
      return course
    }
  }
}
