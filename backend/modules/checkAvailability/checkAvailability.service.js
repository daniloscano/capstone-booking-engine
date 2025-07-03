const mongoose = require('mongoose')
const QuoteRequestSchema = require('@quoteRequestModules/quoteRequest.model')
const QuoteSolutionSchema = require('@quoteRequestModules/quoteSolution/quoteSolution.model')
const BookingSchema = require('@bookingModules/booking.model')
const RoomTypeSchema = require('@roomModules/roomType/roomType.model')
const RoomUnitSchema = require('@roomModules/roomUnit/roomUnit.model')
const RoomRateSchema = require('@roomModules/roomRate/roomRate.model')
const BookingPolicySchema = require('@hotelModules/bookingPolicy/bookingPolicy.model')

const { formattedDate } = require('@utils/dates')

const checkAvailability = async (quoteRequestData) => {
    const {checkIn, checkOut, adults, children, hasInfant} = quoteRequestData
    const requestCheckIn = formattedDate(checkIn)
    const requestCheckOut = formattedDate(checkOut)

    const totalGuests = adults + children

    const quoteRequest = new QuoteRequestSchema(quoteRequestData)
    const newQuoteRequest = await quoteRequest.save()

    const session = await mongoose.startSession()
    await session.withTransaction(async () => {
            // salvataggio booking policies
            const standardPolicy = await BookingPolicySchema.findOne({code: 'std'}).session(session)
            const notRefundablePolicy = await BookingPolicySchema.findOne({code: 'nref'}).session(session)

            // filtro room types che soddisfano occupazione e infant
            const roomTypes = await RoomTypeSchema.find(
                {
                    maxOccupancy: {$gte: totalGuests},
                    baseOccupancy: {$lte: totalGuests},
                    hasCrib: hasInfant
                }
            ).session(session)

            // trova camere occupate
            const occupiedRoomsIds = await BookingSchema.find(
                {
                    checkIn: {$lt: requestCheckIn},
                    checkOut: {$gt: requestCheckOut}
                }
            ).distinct('roomId').session(session)

            const availableRoomUnits = await RoomUnitSchema.find(
                {
                    _id: {$nin: occupiedRoomsIds},
                    roomTypeId: {$in: roomTypes.map(roomType => roomType._id)}
                }
            ).session(session)

            const availableRoomTypeIds = [...new Set(availableRoomUnits.map(availableUnit => availableUnit.roomTypeId.toString()))]

            if (availableRoomTypeIds.length === 0) {
                throw new Error('No available rooms for this quote request')
            }

            // crea le quoteSolutions
            for (const roomTypeId of availableRoomTypeIds) {
                const rates = await RoomRateSchema.find(
                    {
                        roomTypeId,
                        date: {
                            $gte: requestCheckIn,
                            $lt: requestCheckOut
                        }
                    }
                ).session(session)

                const totalPrice = rates.reduce((sum, rate) => sum + rate.price, 0)

                const standardSolution = new QuoteSolutionSchema(
                    {
                        quoteRequestId: newQuoteRequest._id,
                        roomTypeId,
                        bookingPolicyId: standardPolicy._id,
                        price: totalPrice
                    }
                )
                await standardSolution.save({session})

                const notRefundableSolution = new QuoteSolutionSchema(
                    {
                        quoteRequestId: newQuoteRequest._id,
                        roomTypeId,
                        bookingPolicyId: notRefundablePolicy._id,
                        price: totalPrice * 0.9
                    }
                )
                await notRefundableSolution.save({session})

                newQuoteRequest.quoteSolutionsIds.push(standardSolution._id, notRefundableSolution._id)
            }

            return newQuoteRequest.save({session})
        }
    )
}

module.exports = checkAvailability