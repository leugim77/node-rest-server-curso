const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']

    },
    email: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    password: {
        type: String,
        require: [true, 'El nombre es necesario']
    },


})