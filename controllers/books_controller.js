const express = require('express')
const books = express.Router()

books.get('/books', (req, res) => {
    res.json()
})


module.exports = books