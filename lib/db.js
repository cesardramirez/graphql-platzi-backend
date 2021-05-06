'use strict'

const { MongoClient } = require('mongodb')

const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_NAMEDB
} = process.env

// const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAMEDB}`
const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAMEDB}`

let connection

async function connectDB () {
  if (connection) return connection

  let client

  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(DB_NAMEDB)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

module.exports = connectDB
