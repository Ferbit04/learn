const mongoose = require('mongoose');
const password = 'lYQDv7hxoHVbTwzA'
const dbname = 'pokedex'
const uri = `mongodb+srv://Ferbit:${password}@cluster0.u4ntf.mongodb.net/${dbname}?retryWrites=true&w=majority`


module.exports = ()=> mongoose.connect(uri)