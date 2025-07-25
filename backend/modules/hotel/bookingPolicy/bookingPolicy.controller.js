const bookingPolicyService = require('./bookingPolicy.service')
const BookingPolicyNotFoundException = require("@hotelExceptions/bookingPolicy/bokingPolicyNotFoundException")

const getAllBookingPolicies = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const bookingPolicies = await bookingPolicyService.getAllBookingPolicies(page, pageSize)

        if (bookingPolicies.data.length === 0) {
            throw new BookingPolicyNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    bookingPolicies
                }
            )
    } catch (err) {
        next(err)
    }
}

const getBookingPolicyById = async (req, res, next) => {
    const { bookingPolicyId } = req.params

    try {
        const bookingPolicy = await bookingPolicyService.getBookingPolicyById(bookingPolicyId)

        if (!bookingPolicy) {
            throw new BookingPolicyNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    bookingPolicy
                }
            )
    } catch (err) {
        next(err)
    }
}

const createBookingPolicy = async (req, res, next) => {
    const bookingPolicyData = req.body

    try {
        const bookingPolicy = await bookingPolicyService.createBookingPolicy(bookingPolicyData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `BookingPolicy ${bookingPolicy._id} created successfully!`,
                    bookingPolicy
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateBookingPolicyById = async (req, res, next) => {
    const { bookingPolicyId } = req.params
    const bookingPolicyData = req.body

    try {
        const bookingPolicy = await bookingPolicyService.updateBookingPolicyById(bookingPolicyId, bookingPolicyData)

        if (!bookingPolicy) {
            throw new BookingPolicyNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `BookingPolicy ${bookingPolicy._id} updated successfully!`,
                    bookingPolicy
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteBookingPolicyById = async (req, res, next) => {
    const { bookingPolicyId } = req.params

    try {
        const bookingPolicy = await bookingPolicyService.deleteBookingPolicyById(bookingPolicyId)

        if (!bookingPolicy) {
            throw new BookingPolicyNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `BookingPolicy ${bookingPolicy._id} deleted successfully!`,
                    bookingPolicy
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllBookingPolicies,
    getBookingPolicyById,
    createBookingPolicy,
    updateBookingPolicyById,
    deleteBookingPolicyById
}