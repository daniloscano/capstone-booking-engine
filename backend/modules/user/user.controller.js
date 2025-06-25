const userService = require('./user.service')
const UserNotFoundException = require('../../shared/exceptions/user/userNotFoundException')

const getAllUsers = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const users = await userService.getAllUsers(page, pageSize)

        if (users.data.length === 0) {
            throw new UserNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    users
                }
            )
    } catch (err) {
        next(err)
    }
}

const findUserById = async (req, res, next) => {
    const { userId } = req.params

    try {
        const user = await userService.findUserById(userId)

        if (!user) {
            throw new UserNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    user
                }
            )
    } catch (err) {
        next(err)
    }
}

const createUser = async (req, res, next) => {
    const userData = req.body

    try {
        const user = await userService.createUser(userData)

        const { password, ...cleanUser } = user.toObject()

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `User ${user._id} created successfully!`,
                    cleanUser
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateUserById = async (req, res, next) => {
    const { userId } = req.params
    const userData = req.body

    try {
        const user = await userService.updateUserById(userId, userData)

        if (!user) {
            throw new UserNotFoundException()
        }

        const { password, ...cleanUser } = user.toObject()

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `User ${user._id} updated successfully!`,
                    cleanUser
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteUserById = async (req, res, next) => {
    const { userId } = req.params

    try {
        const user = await userService.deleteUserById(userId)

        if (!user) {
            throw new UserNotFoundException()
        }

        const { password, ...cleanUser } = user.toObject()

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `User ${user._id} deleted successfully!`,
                    cleanUser
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllUsers,
    findUserById,
    createUser,
    updateUserById,
    deleteUserById
}
