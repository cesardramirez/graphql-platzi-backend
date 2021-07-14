'use strict'

const queries = require('./queries')
const mutations = require('./mutations')
const types = require('./types')

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query y mutation.
module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types
}
