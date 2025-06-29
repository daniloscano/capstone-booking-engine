const express = require('express')
const bookingPolicyController = require('./bookingPolicy.controller')

const bookingPolicy = express.Router()

bookingPolicy.get("/", bookingPolicyController.getAllBookingPolicies)
bookingPolicy.get("/:bookingPolicyId", bookingPolicyController.getBookingPolicyById)
bookingPolicy.post("/create", bookingPolicyController.createBookingPolicy)
bookingPolicy.patch("/:bookingPolicyId/edit", bookingPolicyController.updateBookingPolicyById)
bookingPolicy.delete("/:bookingPolicyId/delete", bookingPolicyController.deleteBookingPolicyById)

module.exports = bookingPolicy