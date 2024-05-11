const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gymSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        photo: {
            type: String,
            default: 'https://asset.cloudinary.com/dznumjlzc/08ddc3023620c132c2f2927425c6b791',
            validate:{
                validator: function (image) {
                    try {
                        new URL (image)
                        return true
                      } catch (error) {
                        return false
                      }
                  }
            }
        },
        facilities: {
            type: [String],
            enum: ['Zona de Cardio', 'Zona de Fuerza', 'Clases grupales', 'Piscina']
        },
        contact: {
            phone: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        },
        address: {
            type: String,
            required: true,
        },
        coaches: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                ret.location = ret.location.coordinates.reverse();
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
);

gymSchema.index({ location: "2dsphere" });

const Gym = mongoose.model('Gym', gymSchema);

module.exports = Gym;