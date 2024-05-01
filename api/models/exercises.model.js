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
            enum: ['Core', 'Piernas', 'Glúteo', 'Espalda alta', 'Espalda baja', 'Full body', 'Otros'],
            required: true
        },
        equipment: {
            type: [{
                type: String,
                enum: ['Ninguno', 'Banda elástica', 'Mancuerna', 'Barra', 'Máquina']
            }],
            required: true,
            default: ['Ninguno']
        },
        series: {
            type: Number,
            required: true,
            default: 1
        },
        repetitions: {
            type: Number,
            required: true,
            default: 10
        },
        weight: {
            type: Number
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
