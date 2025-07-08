const express = require('express')
const userController = require('./user.controller')
const { createValidationRules, updateValidationRules, userValidator } = require('./userValidation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const user = express.Router()

user.get("/",
    authMiddleware,
    authorizedRoles('admin'),
    userController.getAllUsers
)
user.get("/:userId",
    authMiddleware,
    userController.findUserById
)
user.post("/create",
    authMiddleware,
    authorizedRoles('admin'),
    [ createValidationRules, userValidator ],
    userController.createUser
)
user.patch("/:userId/edit",
    authMiddleware,
    [ updateValidationRules, userValidator ],
    userController.updateUserById
)
user.delete("/:userId/delete",
    authMiddleware,
    authorizedRoles('admin'),
    userController.deleteUserById
)

module.exports = user