const authService = require('./auth.service')

const register = async (req, res, next) => {
    const userData = req.body

    try {
        const user = await authService.register(userData)

        const { password, ...cleanUser } = user.toObject()

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `User ${user._id} registered successfully!`,
                    cleanUser
                }
            )
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    const { email, username, password } = req.body

    try {
        const { token } = await authService.login(email, username, password)

        res
            .headers('authorization', token)
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: 'Login successfully!',
                    token
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login
}