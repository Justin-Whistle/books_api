const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
var cors = require('cors')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/books', require('./controllers/books'))
// const booksController = require('./controllers/books.js')
// app.use('books', booksController)

// LISTEN
app.listen(PORT, () => {
  console.log('Running on port: ', PORT);
})
