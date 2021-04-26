'use strict'

const { graphql, buildSchema } = require('graphql')

// Definiendo el esquema.
const schema = buildSchema(`
  type Query {
      hello: String
  }
`)

var root = { hello: () => 'Hello World!'}

// Ejecutar el query hello.
graphql(schema, '{ hello }', root).then(response => {
    console.log(response)
})  // Imprime { data: [Object: null prototype] { hello: 'Hello World!' } }