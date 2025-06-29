const BookingPolicySchema = require('./bookingPolicy.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(BookingPolicySchema)

const getAllBookingPolicies = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getBookingPolicyById = async (bookingPolicyId) => {
    return BookingPolicySchema.findById(bookingPolicyId)
}

const createBookingPolicy = async (bookingPolicyData) => {
    const newBookingPolicy = new BookingPolicySchema(bookingPolicyData)
    return await newBookingPolicy.save()
}

const updateBookingPolicyById = async (bookingPolicyId, bookingPolicyData) => {
    return BookingPolicySchema.findByIdAndUpdate(bookingPolicyId, bookingPolicyData, { new: true })
}

const deleteBookingPolicyById = async (bookingPolicyId) => {
    return BookingPolicySchema.findByIdAndDelete(bookingPolicyId)
}

module.exports = {
    getAllBookingPolicies,
    getBookingPolicyById,
    createBookingPolicy,
    updateBookingPolicyById,
    deleteBookingPolicyById
}