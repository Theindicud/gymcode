const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
    {
        subscriber: {
            
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        routine: {
            type: Schema.Types.ObjectId,
            ref: 'Routine',
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

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;