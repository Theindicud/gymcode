const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const { PASSWORD_PATTERN, SALT_FACTOR, ADMINS } = require("../configs/constants.config");

const admins = (process.env.ADMINS || '').split(',')
  .map((email) => email.trim());



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
            default: 'https://res.cloudinary.com/dznumjlzc/image/upload/v1714499096/gymcode/coaches/fitness-care-basic_rzox4u.png',
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
        role: {
            type: String,
            enum: ["admin","coach","pupil"],
            default: "pupil"
        },
    },
    { 
        timestamps: true,
        toJSON: {
            virtuals: true,
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

schema.virtual("subscriptions", {
    ref: "Subscription",
    localField: "_id",
    foreignField: "subscriber"
})

schema.pre("save", function (next) {
    if (admins.includes(this.email)) {
        this.role = "admin";
    }
    
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