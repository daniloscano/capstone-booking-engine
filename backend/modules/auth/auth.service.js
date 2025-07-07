const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const UserSchema = require('@userModules/user.model')
const UserNotFoundException = require('@userExceptions/userNotFoundException')
const InvalidCredentialsException = require("@authExceptions/invalidCredentialsException")
const sendEmail = require("@mailer/config");
const InvalidOrMissingTokenException = require("@authExceptions/InvalidOrMissingTokenException");

const register = async (userData) => {
    userData.password = crypto.randomBytes(6).toString('hex')

    const newUser = new UserSchema(userData)
    const savedUser = await newUser.save()

    const resetToken = jwt.sign(
        {id: savedUser.id},
        process.env.JWT_SECRET,
        {expiresIn: '30m'}
    )

    const resetLink = `${process.env.CLIENT_BASE_URL}/reset-password?token=${resetToken}`

    const emailBody = `
        <h3>Benvenuto!</h3>
        <p>Il tuo account è stato creato con successo</p>
        <p>Per attivare il tuo account, ti chiediamo di <a href="${resetLink}">cliccare qui</a> per impostare la tua password</p>
        <p>La password provvisoria è: <b>${userData.password}</b></p>
    `

    await sendEmail(savedUser.email, 'Il tuo account è stato creato!', emailBody)

    return savedUser
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

module.exports = {
    register,
    sendResetPasswordEmail,
    resetPassword,
    login
}