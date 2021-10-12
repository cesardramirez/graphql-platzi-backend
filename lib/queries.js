'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require('./errorHandler')

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query.

module.exports = {
  courses: async () => {
    let db; let courses = []

    try {
      db = await connectDB()
      courses = await db.collection('courses').find().toArray()
    } catch (error) {
      errorHandler(error)
    }

    return courses
  },
  course: async (root, { id }) => {
    let db, course

    try {
      db = await connectDB()
      course = await db.collection('courses').findOne({ _id: ObjectID(id) })
    } catch (error) {
      errorHandler(error)
    }

    return course
  },
  people: async () => {
    let db; let people = []

    try {
      db = await connectDB()
      people = await db.collection('people').find().toArray()
    } catch (error) {
      errorHandler(error)
    }

    return people
  },
  person: async (root, { id }) => {
    let db, person

    try {
      db = await connectDB()
      person = await db.collection('people').findOne({ _id: ObjectID(id) })
    } catch (error) {
      errorHandler(error)
    }

    return person
  },
  searchItems: async (root, { keyword }) => {
    let db, items, courses, people

    try {
      db = await connectDB()
      // Busca en todos los campos por medio del índice. Se debe escribir la palabra completa para que retorne resultados.
      courses = await db.collection('courses').find({ $text: { $search: keyword } }).toArray()

      // Buscar sólo en el campo 'title'.
      // courses = await db.collection('courses').find({ title: { $regex: keyword }}).toArray()

      // Busca sólo en el campo 'title', 'description' o 'topic'. Se puede escribir la palabra completa o una parte de la palabra. Ejem: (programacion o prog).
      /*
      courses = await db.collection('courses').find({ $or: [
        { title: { $regex: keyword }},
        { description: { $regex: keyword }},
        { topic: { $regex: keyword }}
      ]}).toArray()
      */

      people = await db.collection('people').find({ $text: { $search: keyword } }).toArray()

      items = [...courses, ...people]
    } catch (error) {
      errorHandler(error)
    }

    return items
  }
}
