const mongoose = require('mongoose')
const QuoteRequestSchema = require('@quoteRequestModules/quoteRequest.model')
const QuoteSolutionSchema = require('@quoteRequestModules/quoteSolution/quoteSolution.model')
const BookingSchema = require('@bookingModules/booking.model')
const RoomTypeSchema = require('@roomModules/roomType/roomType.model')
const RoomUnitSchema = require('@roomModules/roomUnit/roomUnit.model')
const RoomRateSchema = require('@roomModules/roomRate/roomRate.model')
const BookingPolicySchema = require('@hotelModules/bookingPolicy/bookingPolicy.model')

const { formattedDate } = require('@utils/dates')

const quoteSolutionsPopulate = {
    path: 'quoteSolutionsIds',
    select: 'policies isConfirmed',
    populate: [
        {
            path: 'roomTypeId',
            select: 'name type category description dimensions images maxOccupancy hasCrib',
            populate: [
                {
                    path: 'bedsId',
                    select: 'king single crib layout'
                },
                {
                    path: 'amenitiesIds',
                    select: 'name icon'
                },
            ]
        },
        {
            path: 'policies.bookingPolicyId',
            select: 'code name deposit balance cancellation'
        }
    ]
}

const checkAvailability = async (quoteRequestData) => {
    const {checkIn, checkOut, adults, children, hasInfant} = quoteRequestData
    const requestCheckIn = formattedDate(checkIn)
    const requestCheckOut = formattedDate(checkOut)

    const totalGuests = adults + children

    const quoteRequest = new QuoteRequestSchema(quoteRequestData)
    const newQuoteRequest = await quoteRequest.save()

    const session = await mongoose.startSession()
    await session.withTransaction(async () => {

            const standardPolicy = await BookingPolicySchema.findOne({code: 'std'}).session(session)
            const notRefundablePolicy = await BookingPolicySchema.findOne({code: 'nref'}).session(session)

            const roomTypes = await RoomTypeSchema.find(
                {
                    maxOccupancy: {$gte: totalGuests},
                    baseOccupancy: {$lte: totalGuests},
                    hasCrib: hasInfant
                }
            ).session(session)

            const occupiedRoomsIds = await BookingSchema.find(
                {
                    checkIn: {$lt: requestCheckOut},
                    checkOut: {$gt: requestCheckIn}
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

                const quoteSolution = new QuoteSolutionSchema(
                    {
                        quoteRequestId: newQuoteRequest._id,
                        roomTypeId,
                        policies: [
                            {
                                bookingPolicyId: standardPolicy._id,
                                price: totalPrice
                            },
                            {
                                bookingPolicyId: notRefundablePolicy._id,
                                price: totalPrice * 0.9
                            }
                        ]
                    }
                )

                await quoteSolution.save({ session })

                newQuoteRequest.quoteSolutionsIds.push(quoteSolution._id)
            }

            await newQuoteRequest.save({session})
        }
    )

    return newQuoteRequest.populate(quoteSolutionsPopulate)
}

module.exports = checkAvailability