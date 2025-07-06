const express = require('express')
const bookingController = require('./booking.controller')
const { createValidationRules, updateValidationRules, bookingValidator } = require('./bookingValidation')

const booking = express.Router()

booking.get("/", bookingController.getAllBookings)
booking.get("/:bookingId", bookingController.getBookingById)
booking.get("/guest/:masterGuestId", bookingController.getBookingsByMasterGuestId)
booking.post("/create", [ createValidationRules, bookingValidator ], bookingController.createBooking)
booking.patch("/:bookingId/edit", [ updateValidationRules, bookingValidator ], bookingController.updateBookingById)
booking.delete("/:bookingId/delete", bookingController.deleteBookingById)

module.exports = booking