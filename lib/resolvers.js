'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  }
]

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query.
module.exports = {
  courses: () => {
    return courses
  }
}
