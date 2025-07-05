const mongoose = require('mongoose')
const QuoteRequestSchema = require('@quoteRequestModules/quoteRequest.model')
const QuoteSolutionSchema = require('@quoteRequestModules/quoteSolution/quoteSolution.model')
const RoomUnitSchema = require('@roomModules/roomUnit/roomUnit.model')
const AncillarySchema = require('@hotelModules/ancillary/ancillary.model')
const GuestSchema = require('@guestModules/guest.model')
const AddressSchema = require('@guestModules/address/address.model')
const DocumentSchema = require('@guestModules/document/document.model')
const BookingSchema = require('@bookingModules/booking.model')
const BookingPaymentSchema = require('@bookingModules/bookingPayment/bookingPayment.model')

const createBooking = async (
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
) => {
    const session = await mongoose.startSession()

    await session.withTransaction(async () => {
        const quoteSolution = await QuoteSolutionSchema.findById(quoteSolutionId)
            .session(session)
        const quoteRequest = await QuoteRequestSchema.findById(quoteSolution.quoteRequestId)
            .session(session)

        const nights = quoteRequest.daysStay
        const adults = quoteRequest.adults
        const children = quoteRequest.children

        const ancillaryPriceItems = []
        for (const { ancillaryId } of ancillariesData) {
            const ancillary = await AncillarySchema.findById(ancillaryId)
                .session(session)

            let price = 0
            switch (ancillary.allocation) {
                case 'perNight':
                    price = ancillary.price * nights
                    break
                case 'perOccupancy':
                    price = ancillary.price * (adults + children)
                    break
                default:
                    price = ancillary.price
            }

            ancillaryPriceItems.push(
                {
                    ancillaryId: ancillary._id,
                    price
                }
            )
        }

        const ancillariesPrice = ancillaryPriceItems.reduce((sum, item) => sum + item.price, 0)

        const address = new AddressSchema(masterGuestAddress)
        await address.save()

        const document = new DocumentSchema(masterGuestDocument)
        await document.save()

        const masterGuest = new GuestSchema(
            {
                ...masterGuestData,
                addressId: address._id,
                documentId: document._id
            }
        )
        await masterGuest.save({ session })

        const guestsIds = []
        for (const guestData of guestsData) {
            const guest = new GuestSchema(guestData)
            await guest.save({ session })
            guestsIds.push(guest._id)
        }

        const bookingPayment = new BookingPaymentSchema(paymentData)
        await bookingPayment.save({ session })

        const booking = new BookingSchema(
            {
                quoteRequestId: quoteRequest._id,
                masterGuestId: masterGuest._id,
                guestsIds,
                roomId: roomUnitId,
                checkIn: quoteRequest.checkIn,
                checkOut: quoteRequest.checkOut,
                adults: adults,
                children: children,
                hasInfant: quoteRequest.hasInfant,
                policyId: quoteSolution.bookingPolicyId,
                price: quoteSolution.price,
                ancillariesIds: ancillaryPriceItems,
                ancillariesPrice,
                totalPrice: paymentData.amount,
                stage: 'waitingForDeposit',
                paymentsIds: [ bookingPayment._id ]
            }
        )
        await booking.save({ session })

        return booking
    }).finally(() => session.endSession())
}

module.exports = createBooking