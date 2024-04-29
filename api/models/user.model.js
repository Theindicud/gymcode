const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

// FALTAN METER ATRIBUTOS DEL MODELO DE USUARIO

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
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

schema.pre("save", function (next) {
    if (this.isModified("password")) {
        bcrypt
        .hash(this.password, 10)
        .then((hash) => {
            this.password = hash;
            next();
        })
        .catch(next);
    } else {
        next();
    }
});

schema.method("checkPassword", function(password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", schema);

module.exports = User;