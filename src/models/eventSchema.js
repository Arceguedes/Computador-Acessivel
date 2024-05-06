const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    adress: {
        type: String,
        required: true
    },
    opHours:{
        type: Timestamp,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    acessibility: {
        type: Array,
        default: []
    },
    relevance: {
        type: Number,
        default: 1
    },
    stillAvailable: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('hardware', hardwareSchema);
