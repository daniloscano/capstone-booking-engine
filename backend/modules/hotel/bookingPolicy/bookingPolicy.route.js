const express = require('express')
const bookingPolicyController = require('./bookingPolicy.controller')
const { createValidationRules, updateValidationRules, bookingPolicyValidator } = require('./bookingPolicy.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const bookingPolicy = express.Router()

bookingPolicy.get("/",
    authMiddleware,
    bookingPolicyController.getAllBookingPolicies
)
bookingPolicy.get("/:bookingPolicyId",
    authMiddleware,
    bookingPolicyController.getBookingPolicyById
)
bookingPolicy.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, bookingPolicyValidator ],
    bookingPolicyController.createBookingPolicy
)
bookingPolicy.patch("/:bookingPolicyId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, bookingPolicyValidator ],
    bookingPolicyController.updateBookingPolicyById
)
bookingPolicy.delete("/:bookingPolicyId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    bookingPolicyController.deleteBookingPolicyById
)

module.exports = bookingPolicy