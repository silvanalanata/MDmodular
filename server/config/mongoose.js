
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animales_db', {useNewUrlParser: true});

module.exports = mongoose