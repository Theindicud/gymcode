const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const routineSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required:true,
        trim: true,
        maxLength: 100
    },
    difficulty: {
        type: String,
        enum: {
            values: ['Principiante', 'Intermedio', 'Experto'],
            message: 'Invalid difficulty. Choose from: Principiant, Intermedio or Experto'
        },
        required: true
    },
    routineType: {
        type: String,
        enum: ['Fuerza', 'Resistencia', 'Aeróbico', 'Flexibilidad', 'Otro'],
        required: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})