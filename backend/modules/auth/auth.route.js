const express = require('express')
const authController = require('./auth.controller')
const { registerValidationRules, loginValidationRules, resetPasswordValidationRules, authValidator } = require('./auth.validation')
const authMiddleware = require("@authMiddlewares/auth")

const auth = express.Router()

auth.post("/register",
    [ registerValidationRules, authValidator ],
    authController.register
)
auth.post("/forgot-password",
    authMiddleware,
    authController.sendResetPasswordEmail)
auth.post("/reset-password",
    authMiddleware,
    [ resetPasswordValidationRules, authValidator ],
    authController.resetPassword
)
auth.post("/login",
    [ loginValidationRules, authValidator ],
    authController.login
)
auth.get("/profile",
    authMiddleware,
    authController.getUserProfile
)

module.exports = auth