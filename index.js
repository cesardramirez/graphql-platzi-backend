'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const port = process.env.port || 3000

// Definiendo el esquema (con 2 queries).
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
app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
