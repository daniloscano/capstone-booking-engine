const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const UserSchema = require('@userModules/user.model')
const UserNotFoundException = require('@userExceptions/userNotFoundException')
const InvalidCredentialsException = require("@authExceptions/invalidCredentialsException")

const register = async (userData) => {
    userData.password = crypto.randomBytes(6).toString('hex')
    process.env.NODE_ENV === 'dev' && console.log(userData.password)

    const newUser = new UserSchema(userData)
    return await newUser.save()
}

const login = async (email, username, password) => {
    const user = email
        ? await UserSchema.findOne({email})
        : await UserSchema.findOne({username})

    if (!user) {
        throw new UserNotFoundException()
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new InvalidCredentialsException()
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '6h' }
    )

    return { token }
}

module.exports = {
    register,
    login
}