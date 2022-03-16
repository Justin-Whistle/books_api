const express = require('express')
const books = express.Router()
const Book = require('../models/index.js')

// Get all books
books.get('/', (req, res) => {
    Book.find()
    .then((foundBooks) => {
        res.json({ foundBooks })
    })
    .catch(err => {
        console.log(err)
        res.json('err', err)
    })
})

// Get individual book
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then((foundBook) => {
        res.json({ foundBook })
    })
    .catch(err => {
        console.log(err)
        res.json('err', err)
    })
})

// Update book
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.json(`/books/${req.params.id}`)
    })
    .catch(err => {
        res.json('err', err)
    })
})

// Delete book
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json(`${req.params.id} successfully deleted`)
    })
    .catch(err => {
        res.json('err', err)
    })
})

// Add book
books.post('/', (req, res) => {
    Book.create(req.body)
    .then(() => {
        console.log(req.body)
        res.json(req.body)
    })
    .catch(err => {
        console.log('err', err)
        res.json(err)
    })
})

module.exports = books