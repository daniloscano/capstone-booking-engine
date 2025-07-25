const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const UserSchema = require('@userModules/user.model')
const UserNotFoundException = require('@userExceptions/userNotFoundException')
const InvalidCredentialsException = require("@authExceptions/invalidCredentialsException")
const sendEmail = require("@mailer/config")
const InvalidOrMissingTokenException = require("@authExceptions/InvalidOrMissingTokenException");

const register = async (userData) => {
    const newUser = new UserSchema(userData)
    return newUser.save()
}

const sendResetPasswordEmail = async (email) => {
    const user = await UserSchema.findOne({ email })
    if (!user) {
        throw new UserNotFoundException()
    }

    const resetToken = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    )

    const resetLink = `${process.env.CLIENT_BASE_URL}/reset-password?token=${resetToken}`

    const emailBody = `
        <h3>Reset Password</h3>
        <p>Clicca qui per modificare la tua password: 
        <a href="${resetLink}">Reset Password</a></p>
    `

    await sendEmail(user.email, 'Reset Password', emailBody)
}

const resetPassword = async (token, newPassword) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return UserSchema.findByIdAndUpdate(decoded.id, { password: newPassword })
    } catch (err) {
        throw new InvalidOrMissingTokenException()
    }
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
        {expiresIn: '6h'}
    )

    return {token}
}

const getUserProfile = async (userId) => {
    const profile = await UserSchema.findById(userId)

    if (!profile) {
        throw new UserNotFoundException()
    }

    return profile
}

module.exports = {
    register,
    sendResetPasswordEmail,
    resetPassword,
    login,
    getUserProfile
}