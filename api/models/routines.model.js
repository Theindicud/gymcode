
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
        required: true,
        trim: true,
        maxLength: 300
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
                exercise: {
                    type: Schema.Types.ObjectId,
                    ref: 'Exercise'
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
                weight: Number,
                duration: Number
            }
        ],
    equipmentNecessary: Boolean,
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
    }
);



const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
