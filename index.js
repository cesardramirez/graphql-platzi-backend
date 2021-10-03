'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const expressPlayground = require('graphql-playground-middleware-express').default
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production'

// Definiendo el esquema (con las queries del archivo).
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors())

// Se ejecutan cada uno de los queries.
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

// Se agrega la interfaz gráfica de Playground para GraphQL.
if (isDev) {
  app.get('/', expressPlayground({ endpoint: '/graphql' }))
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/`)
})
