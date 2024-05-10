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
            enum: ['Core', 'Piernas', 'Glúteo', 'Espalda alta', 'Espalda baja', 'Full body', 'Brazos', 'Pecho', 'Hombros', 'Otros'],
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
                return ret;
            },
        },
    },
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
