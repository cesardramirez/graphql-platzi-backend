'use strict'

const { graphql, buildSchema } = require('graphql')

// Definiendo el esquema (queries).
const schema = buildSchema(`
  type Query {
      hello: String
      gretting: String
  }
`)

// Configurar los resolvers.
// Se define los resolvers (una función) por cada query.
const resolvers = {
  hello: () => {
    return 'Hola Mundo!'
  },
  gretting: () => {
    return 'Saludo a todos!'
  }
}

// Se ejecutan cada uno de los queries.
graphql(schema, '{ hello }', resolvers).then(response => {
    console.log(response)
})  // Imprime { data: [Object: null prototype] { hello: 'Hello World!' } }
graphql(schema, '{ gretting }', resolvers).then(response => {
  console.log(response)
})  // Imprime { data: [Object: null prototype] { gretting: 'Saludo a todos!' } }

// Ejecutar ambos queries con el mismo resolvers.
graphql(schema, '{ hello, gretting }', resolvers).then(response => {
  console.log(response)
}) // Imprime { data: [Object: null prototype] { hello: 'Hola Mundo!', gretting: 'Saludo a todos!' } }
