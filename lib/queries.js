'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query.

module.exports = {
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
    let db, course

    try {
      db = await connectDB()
      course = await db.collection('courses').findOne({ _id: ObjectID(id) })
    } catch (error) {
      console.error(error)
    }

    return course
  },
  students: async () => {
    let db; let students = []

    try {
      db = await connectDB()
      students = await db.collection('students').find().toArray()
    } catch (error) {
      console.error(error)
    }

    return students
  },
  student: async (root, { id }) => {
    let db, student

    try {
      db = await connectDB()
      student = await db.collection('students').findOne({ _id: ObjectID(id) })
    } catch (error) {
      console.error(error)
    }

    return student
  }
}
