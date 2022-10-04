// require mongoose:
const mongoose = require('mongoose')


// schema
let bookSchema = new mongoose.Schema ({
    title: { type: String},
    description: {type :String},
    year: {type: Number},
    quantity: {type: Number},
    imageURL: {type: String}
})

// model and export:
module.exports = mongoose.model('Book', bookSchema)