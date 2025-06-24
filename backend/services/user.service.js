const UserSchema = require('../models/user')

const Pagination = require('../utils/pagination')
const pagination = new Pagination(UserSchema)

const getAllUsers = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const findUserById = async (userId) => {
    return UserSchema.findById(userId, '-password')
}

const createUser = async (userData) => {
    const newUser = new UserSchema(userData)
    return await newUser.save()
}

const updateUserById = async (userId, userData) => {
    return UserSchema.findByIdAndUpdate(userId, userData, { new: true })
}

const deleteUserById = async (userId) => {
    return UserSchema.findByIdAndDelete(userId)
}

module.exports = {
    getAllUsers,
    findUserById,
    createUser,
    updateUserById,
    deleteUserById
}