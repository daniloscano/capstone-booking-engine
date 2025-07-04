const mongoose = require('mongoose')
const QuoteRequestSchema = require('@quoteRequestModules/quoteRequest.model')
const QuoteSolutionSchema = require('@quoteRequestModules/quoteSolution/quoteSolution.model')
const BookingSchema = require('@bookingModules/booking.model')
const RoomUnitSchema = require('@roomModules/roomUnit/roomUnit.model')

const checkRoomAvailability = async (quoteSolutionId) => {
    const session = await mongoose.startSession()
    await session.withTransaction(async () => {
        const quoteSolution = await QuoteSolutionSchema.findById(quoteSolutionId)
            .session(session)
        const quoteRequest = await QuoteRequestSchema.findById(quoteSolution.quoteRequestId)
            .session(session)

        const {checkIn, checkOut} = quoteRequest
        const roomTypeId = quoteSolution.roomTypeId

        const occupiedRoomUnitsIds = await BookingSchema.find(
            {
                roomTypeId,
                checkIn: {$lt: checkOut},
                checkOut: {$gt: checkIn}
            }
        ).distinct('roomId').session(session)

        const availableRoomUnit = await RoomUnitSchema.findOne(
            {
                roomTypeId,
                _id: {$nin: occupiedRoomUnitsIds}
            }
        ).session(session)

        if (!availableRoomUnit) {
            return {available: false}
        }

        return {
            available: true,
            roomUnitId: availableRoomUnit._id
        }
    }).finally(() => session.endSession())
}

module.exports = checkRoomAvailability