const BookingPaymentSchema = require('./bookingPayment.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(BookingPaymentSchema)

const getAllBookingPayments = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getBookingPaymentById = async (bookingPaymentId) => {
    return BookingPaymentSchema.findById(bookingPaymentId)
}

const createBookingPayment = async (bookingPaymentData) => {
    const newBookingPayment = new BookingPaymentSchema(bookingPaymentData)
    return await newBookingPayment.save()
}

const updateBookingPaymentById = async (bookingPaymentId, bookingPaymentData) => {
    return BookingPaymentSchema.findByIdAndUpdate(bookingPaymentId, bookingPaymentData, { new: true })
}

const deleteBookingPaymentById = async (bookingPaymentId) => {
    return BookingPaymentSchema.findByIdAndDelete(bookingPaymentId)
}

module.exports = {
    getAllBookingPayments,
    getBookingPaymentById,
    createBookingPayment,
    updateBookingPaymentById,
    deleteBookingPaymentById
}