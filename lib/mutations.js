'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }

    const newCourse = Object.assign(defaults, input)
    let db, course

    try {
      db = await connectDB()
      course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (error) {
      console.error(error)
    }

    return newCourse
  },
  editCourse: async (root, { id, input }) => {
    let db, course

    try {
      db = await connectDB()
      await db.collection('courses').updateOne({ _id: ObjectID(id) }, { $set: input })
      // El update de mongo no devuelve la info del objeto modificado. Hay que obtenerlo.
      course = await db.collection('courses').findOne({ _id: ObjectID(id) })
    } catch (error) {
      console.log(error)
    }

    return course
  },
  deleteCourse: async (root, { id }) => {
    let db

    try {
      db = await connectDB()
      await db.collection('courses').deleteOne({ _id: ObjectID(id) })
    } catch (error) {
      console.log(error)
    }

    return true
  },
  createStudent: async (root, { input }) => {
    let db, student

    try {
      db = await connectDB()
      student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
    } catch (error) {
      console.error(error)
    }

    return input
  },
  editStudent: async (root, { id, input }) => {
    let db, student

    try {
      db = await connectDB()
      await db.collection('students').updateOne({ _id: ObjectID(id) }, { $set: input })
      student = await db.collection('students').findOne({ _id: ObjectID(id) })
    } catch (error) {
      console.log(error)
    }

    return student
  },
  deleteStudent: async (root, { id }) => {
    let db

    try {
      db = await connectDB()
      await db.collection('students').deleteOne({ _id: ObjectID(id) })
    } catch (error) {
      console.log(error)
    }

    return true
  },
  addPeople: async (root, { courseID, personID }) => {
    let db, course, person

    try {
      db = await connectDB()
      course = await db.collection('courses').findOne({ _id: ObjectID(courseID) })
      person = await db.collection('students').findOne({ _id: ObjectID(personID) })

      if (!course || !person) throw new Error('La persona o el curso no existe.')

      await db.collection('courses').updateOne({ _id: ObjectID(courseID) }, { $addToSet: { people: ObjectID(personID) } })
    } catch (error) {
      console.log(error)
    }

    return course
  }
}
