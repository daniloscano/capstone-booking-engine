const express = require('express')
const bookingController = require('./booking.controller')

const booking = express.Router()

booking.get("/", bookingController.getAllBookings)
booking.get("/:bookingId", bookingController.getBookingById)
booking.post("/create", bookingController.createBooking)
booking.patch("/:bookingId/edit", bookingController.updateBookingById)
booking.delete("/:bookingId/delete", bookingController.deleteBookingById)

module.exports = booking