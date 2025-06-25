const express = require('express')
const userController = require('./user.controller')
const { createValidationRules, updateValidationRules, userValidator } = require('./userValidation')

const user = express.Router()

user.get("/", userController.getAllUsers)
user.get("/:userId", userController.findUserById)
user.post("/create", [ createValidationRules, userValidator ], userController.createUser)
user.patch("/:userId/edit", [ updateValidationRules, userValidator ], userController.updateUserById)
user.delete("/:userId/delete", userController.deleteUserById)

module.exports = user