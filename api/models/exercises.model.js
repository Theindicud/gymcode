const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        bodyZone: {
            type: String,
            enum: ['Core', 'Piernas', 'Glúteo', 'Espalda alta', 'Espalda baja', 'Full body', 'Brazos', 'Otros'],
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
