'use strict'

const courses = [
  {
    _id: 'anyid1',
    title: 'Mi titulo 1',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'anyid3',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  }
]

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query.
module.exports = {
  Query: {
    courses: () => {
      return courses
    },
    course: (root, args) => {
      return courses.find(course => course._id === args.id)
    }
  }
}
