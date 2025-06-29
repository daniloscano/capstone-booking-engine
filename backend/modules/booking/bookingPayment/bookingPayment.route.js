const express = require('express')
const bookingPaymentController = require('./bookingPayment.controller')

const bookingPayment = express.Router()

bookingPayment.get("/", bookingPaymentController.getAllBookingPayments)
bookingPayment.get("/:bookingPaymentId", bookingPaymentController.getBookingPaymentById)
bookingPayment.post("/create", bookingPaymentController.createBookingPayment)
bookingPayment.patch("/:bookingPaymentId/edit", bookingPaymentController.updateBookingPaymentById)
bookingPayment.delete("/:bookingPaymentId/delete", bookingPaymentController.deleteBookingPayment)

module.exports = bookingPayment