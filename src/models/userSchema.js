const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    race:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nis:{
        type: Number,
        required: true
    },
    tipoDeConta:{
        type: String,
        required: true
    },
    knowledge: {
        type: String,
        required: true
    },
    aboutMe:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('user', userSchema);
