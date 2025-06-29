const express = require('express')
const bookingPolicyController = require('./bookingPolicy.controller')
const { createValidationRules, updateValidationRules, bookingPolicyValidator } = require('./bookingPolicyValidation')

const bookingPolicy = express.Router()

bookingPolicy.get("/", bookingPolicyController.getAllBookingPolicies)
bookingPolicy.get("/:bookingPolicyId", bookingPolicyController.getBookingPolicyById)
bookingPolicy.post("/create", [ createValidationRules, bookingPolicyValidator ], bookingPolicyController.createBookingPolicy)
bookingPolicy.patch("/:bookingPolicyId/edit", [ updateValidationRules, bookingPolicyValidator ], bookingPolicyController.updateBookingPolicyById)
bookingPolicy.delete("/:bookingPolicyId/delete", bookingPolicyController.deleteBookingPolicyById)

module.exports = bookingPolicy