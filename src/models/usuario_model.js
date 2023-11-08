const mongoose = require('mongoose');

const usuario_model = mongoose.Schema({
    cod: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    id_rol: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('usuario', usuario_model);