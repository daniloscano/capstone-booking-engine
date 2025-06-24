const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            max: 40
        },
        lastName: {
            type: String,
            required: true,
            max: 80
        },
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 40
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 16
        },
        role: {
            type: String,
            required: true,
            default: 'guest',
            enum: [ 'admin', 'manager', 'operator', 'guest' ]
        },
        guestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        }
    }, { timestamps: true, strict: true }
)

UserSchema.pre('save', async function(next) {
    const user = this

    if (!user.isModified('password')) {
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        next()
    } catch (err) {
        next(err)
    }
})

UserSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate()

    if (!update || !update.password) {
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        update.password = await bcrypt.hash(update.password, salt)
        this.setUpdate(update)

        next()
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('user', UserSchema, 'users')