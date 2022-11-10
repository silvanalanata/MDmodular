const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nombre: {type: String, require: [true, 'nombre obligatorio']},
    edad:   {type: String, require: [true, 'edad obligatorio']},
    tipo:   {type: String, require: [true, 'tipo obligatorio']}
})
const Animal = mongoose.model('Animal',UserSchema)
module.exports = Animal