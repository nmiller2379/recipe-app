const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true
            },
            measurement: {
                type: Number,
                required: true
            },
            measure: {
                type: String,
                required: true
            }
        }
    ],
    instructions: {
        type: String,
        required: true

    }

})