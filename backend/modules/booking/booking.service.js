const BookingSchema = require('./booking.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(BookingSchema)

const fieldsToPopulate = [
    {
        path: 'masterGuestId',
        select: 'firstName lastName gender dateOfBirth'
    },
    {
        path: 'guestsIds',
        select: 'firstName lastName gender dateOfBirth'
    },
    {
        path: 'roomId',
        select: 'number',
        populate: {
            path: 'roomTypeId',
            select: 'name type category'
        }
    },
    {
        path: 'policyId',
        select: 'name'
    },
    {
        path: 'ancillariesIds',
        select: 'name price allocation'
    },
    {
        path: 'paymentsIds',
        select: 'type amount isCompleted completedDate'
    }
]

const getAllBookings = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort, fieldsToPopulate)
}

const getBookingById = async (bookingId) => {
    return BookingSchema.findById(bookingId)
        .populate(fieldsToPopulate)
}

const createBooking = async (bookingData) => {
    const newBooking = new BookingSchema(bookingData)
    return await newBooking.save()
}

const updateBookingById = async (bookingId, bookingData) => {
    return BookingSchema.findByIdAndUpdate(bookingId, bookingData, {new: true})
}

const deleteBookingById = async (bookingId) => {
    return BookingSchema.findByIdAndDelete(bookingId)
}

module.exports = {
    getAllBookings,
    getBookingById,
    createBooking,
    updateBookingById,
    deleteBookingById
}