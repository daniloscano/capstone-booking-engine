const BookingSchema = require('./booking.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(BookingSchema)

const getAllBookings = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getBookingById = async (bookingId) => {
    return BookingSchema.findById(bookingId)
}

const createBooking = async (bookingData) => {
    const newBooking = new BookingSchema(bookingData)
    return await newBooking.save()
}

const updateBookingById = async (bookingId, bookingData) => {
    return BookingSchema.findByIdAndUpdate(bookingId, bookingData, { new: true })
}

const deleteBookingById = async (bookingId) => {
    return await BookingSchema.findByIdAndDelete(bookingId)
}

module.exports = {
    getAllBookings,
    getBookingById,
    createBooking,
    updateBookingById,
    deleteBookingById
}