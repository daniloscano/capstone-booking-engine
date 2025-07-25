const express = require('express')
const bookingController = require('./booking.controller')
const { createValidationRules, updateValidationRules, bookingValidator } = require('./booking.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const booking = express.Router()

booking.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    bookingController.getAllBookings
)
booking.get("/:bookingId",
    bookingController.getBookingById
)
booking.get("/guest/:masterGuestId",
    authMiddleware,
    bookingController.getBookingsByMasterGuestId
)
booking.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, bookingValidator ],
    bookingController.createBooking
)
booking.patch("/:bookingId/edit",
    authMiddleware,
    [ updateValidationRules, bookingValidator ],
    bookingController.updateBookingById
)
booking.delete("/:bookingId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    bookingController.deleteBookingById
)

module.exports = booking