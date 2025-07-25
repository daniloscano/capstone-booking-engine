const bookingService = require('./booking.service')
const BookingNotFoundException = require("@bookingExceptions/bookingNotFoundException");

const getAllBookings = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const bookings = await bookingService.getAllBookings(page, pageSize)

        if (bookings.data.length === 0) {
            throw new BookingNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    bookings
                }
            )
    } catch (err) {
        next(err)
    }
}

const getBookingById = async (req, res, next) => {
    const { bookingId } = req.params

    try {
        const booking = await bookingService.getBookingById(bookingId)

        if (!booking) {
            throw new BookingNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    booking
                }
            )
    } catch (err) {
        next(err)
    }
}

const getBookingsByMasterGuestId = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query
    const { masterGuestId } = req.params

    try {
        const bookings = await bookingService.getBookingsByMasterGuestId(masterGuestId, page, pageSize)

        if (bookings.data.length === 0) {
            throw new BookingNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    bookings
                }
            )
    } catch (err) {
        next(err)
    }
}

const createBooking = async (req, res, next) => {
    const bookingData = req.body

    try {
        const booking = await bookingService.createBooking(bookingData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `Booking ${booking._id} created successfully!`,
                    booking
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateBookingById = async (req, res, next) => {
    const { bookingId } = req.params
    const bookingData = req.body

    try {
        const booking = await bookingService.updateBookingById(bookingId, bookingData)

        if (!booking) {
            throw new BookingNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Booking ${booking._id} updated successfully!`,
                    booking
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteBookingById = async (req, res, next) => {
    const { bookingId } = req.params

    try {
        const booking = await bookingService.deleteBookingById(bookingId)

        if (!booking) {
            throw new BookingNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Booking ${booking._id} deleted successfully!`,
                    booking
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllBookings,
    getBookingById,
    getBookingsByMasterGuestId,
    createBooking,
    updateBookingById,
    deleteBookingById
}