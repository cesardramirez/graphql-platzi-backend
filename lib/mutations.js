'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require('./errorHandler')

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
      errorHandler(error)
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
      errorHandler(error)
    }

    return course
  },
  deleteCourse: async (root, { id }) => {
    let db

    try {
      db = await connectDB()
      await db.collection('courses').deleteOne({ _id: ObjectID(id) })
    } catch (error) {
      errorHandler(error)
    }

    return true
  },
  createPerson: async (root, { input }) => {
    let db, person

    try {
      db = await connectDB()
      person = await db.collection('people').insertOne(input)
      input._id = person.insertedId
    } catch (error) {
      errorHandler(error)
    }

    return input
  },
  editPerson: async (root, { id, input }) => {
    let db, person

    try {
      db = await connectDB()
      await db.collection('people').updateOne({ _id: ObjectID(id) }, { $set: input })
      person = await db.collection('people').findOne({ _id: ObjectID(id) })
    } catch (error) {
      errorHandler(error)
    }

    return person
  },
  deletePerson: async (root, { id }) => {
    let db

    try {
      db = await connectDB()
      await db.collection('people').deleteOne({ _id: ObjectID(id) })
    } catch (error) {
      errorHandler(error)
    }

    return true
  },
  addPersonToCourse: async (root, { courseID, personID }) => {
    let db, course, person

    try {
      db = await connectDB()
      course = await db.collection('courses').findOne({ _id: ObjectID(courseID) })
      person = await db.collection('people').findOne({ _id: ObjectID(personID) })

      if (!course || !person) throw new Error('La persona o el curso no existe.')

      await db.collection('courses').updateOne({ _id: ObjectID(courseID) }, { $addToSet: { people: ObjectID(personID) } })
      course = await db.collection('courses').findOne({ _id: ObjectID(courseID) })
    } catch (error) {
      errorHandler(error)
    }

    return course
  }
}
