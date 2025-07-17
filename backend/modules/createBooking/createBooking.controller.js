const createBookingService = require('./createBooking.service')

const createBooking = async (req, res, next) => {
    const {
        quoteSolutionId,
        roomUnitId,
        ancillariesData,
        masterGuestData,
        masterGuestAddress,
        masterGuestDocument,
        guestsData,
        paymentData
    } = req.body

    try {
        const booking = await createBookingService(
            {
                quoteSolutionId,
                roomUnitId,
                ancillariesData,
                masterGuestData,
                masterGuestAddress,
                masterGuestDocument,
                guestsData,
                paymentData
            }
        )

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `Booking ${booking._id} created successfully`,
                    booking
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = createBooking