const bookingPaymentService = require('./bookingPayment.service')
const BookingPaymentNotFoundException = require("@bookingExceptions/bookingPayment/bookingPaymentNotFoundException");

const getAllBookingPayments = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const bookingPayments = await bookingPaymentService.getAllBookingPayments(page, pageSize)

        if (bookingPayments.data.length === 0) {
            throw new BookingPaymentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    bookingPayments
                }
            )
    } catch (err) {
        next(err)
    }
}

const getBookingPaymentById = async (req, res, next) => {
    const { bookingPaymentId } = req.params

    try {
        const bookingPayment = await bookingPaymentService.getBookingPaymentById(bookingPaymentId)

        if (!bookingPayment) {
            throw new BookingPaymentNotFoundException()
        }
    } catch (err) {
        next(err)
    }
}

const createBookingPayment = async (req, res, next) => {
    const bookingPaymentData = req.body

    try {
        const bookingPayment = await bookingPaymentService.createBookingPayment(bookingPaymentData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `BookingPayment ${bookingPayment._id} created successfully!`,
                    bookingPayment
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateBookingPaymentById = async (req, res, next) => {
    const { bookingPaymentId } = req.params
    const bookingPaymentData = req.body

    try {
        const bookingPayment = await bookingPaymentService.updateBookingPaymentById(bookingPaymentId, bookingPaymentData)

        if (!bookingPayment) {
            throw new BookingPaymentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `BookingPayment ${bookingPayment._id} updated successfully!`,
                    bookingPayment
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteBookingPayment = async (req, res, next) => {
    const { bookingPaymentId } = req.params

    try {
        const bookingPayment = await bookingPaymentService.deleteBookingPaymentById(bookingPaymentId)

        if (!bookingPayment) {
            throw new BookingPaymentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `BookingPayment ${bookingPayment._id} deleted successfully!`,
                    bookingPayment
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllBookingPayments,
    getBookingPaymentById,
    createBookingPayment,
    updateBookingPaymentById,
    deleteBookingPayment
}