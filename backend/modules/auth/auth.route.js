const express = require('express')
const authController = require('./auth.controller')
const { registerValidationRules, loginValidationRules, resetPasswordValidationRules, authValidator } = require('./auth.validation')

const auth = express.Router()

auth.post("/register", [ registerValidationRules, authValidator ], authController.register)
auth.post("/forgot-password", authController.sendResetPasswordEmail)
auth.post("/reset-password", [ resetPasswordValidationRules, authValidator ], authController.resetPassword)
auth.post("/login", [ loginValidationRules, authValidator ], authController.login)

module.exports = auth