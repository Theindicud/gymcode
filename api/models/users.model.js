const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const { PASSWORD_PATTERN, SALT_FACTOR, ADMINS } = require("../configs/constants.config");


// FALTAN METER ATRIBUTOS DEL MODELO DE USUARIO

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
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
        email: {
            type: String,
            lowercase: true,
            unique: true,
            trim: true,
            required: 'Email is required',
        },
        password: {
            type: String,
            required: 'Password is required',
            trim: true,
            match: [PASSWORD_PATTERN, 'Password needs at least 8 characters']
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        isCoach: {
            type: Boolean
        },
        isAdmin: {
            type: Boolean
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
    this.isAdmin = ADMINS === this.email;
    if (this.isModified("password")) {
        bcrypt
        .hash(this.password, SALT_FACTOR)
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