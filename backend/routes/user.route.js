const express = require('express')
const userController = require('../controllers/user.controller')

const user = express.Router()

user.get("/", userController.getAllUsers)
user.get("/:userId", userController.findUserById)
user.post("/create", userController.createUser)
user.patch("/:userId/edit", userController.updateUserById)
user.delete("/:userId", userController.deleteUserById)

module.exports = user