const express = require('express')
const bookingPaymentController = require('./bookingPayment.controller')
const { createValidationRules, updateValidationRules, bookingPaymentValidator } = require('./bookingPaymentValidation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const bookingPayment = express.Router()

bookingPayment.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    bookingPaymentController.getAllBookingPayments
)
bookingPayment.get("/:bookingPaymentId",
    authMiddleware,
    bookingPaymentController.getBookingPaymentById
)
bookingPayment.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, bookingPaymentValidator ],
    bookingPaymentController.createBookingPayment
)
bookingPayment.patch("/:bookingPaymentId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, bookingPaymentValidator ],
    bookingPaymentController.updateBookingPaymentById
)
bookingPayment.delete("/:bookingPaymentId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    bookingPaymentController.deleteBookingPayment
)

module.exports = bookingPayment