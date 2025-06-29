const express = require('express')
const bookingPaymentController = require('./bookingPayment.controller')
const { createValidationRules, updateValidationRules, bookingPaymentValidator } = require('./bookingPaymentValidation')

const bookingPayment = express.Router()

bookingPayment.get("/", bookingPaymentController.getAllBookingPayments)
bookingPayment.get("/:bookingPaymentId", bookingPaymentController.getBookingPaymentById)
bookingPayment.post("/create", [ createValidationRules, bookingPaymentValidator ], bookingPaymentController.createBookingPayment)
bookingPayment.patch("/:bookingPaymentId/edit", [ updateValidationRules, bookingPaymentValidator ], bookingPaymentController.updateBookingPaymentById)
bookingPayment.delete("/:bookingPaymentId/delete", bookingPaymentController.deleteBookingPayment)

module.exports = bookingPayment