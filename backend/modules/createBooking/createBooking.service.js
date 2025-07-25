const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const sendEmail = require("@mailer/config")
const crypto = require('crypto')
const QuoteRequestSchema = require('@quoteRequestModules/quoteRequest.model')
const QuoteSolutionSchema = require('@quoteRequestModules/quoteSolution/quoteSolution.model')
const AncillarySchema = require('@hotelModules/ancillary/ancillary.model')
const GuestSchema = require('@guestModules/guest.model')
const AddressSchema = require('@guestModules/address/address.model')
const DocumentSchema = require('@guestModules/document/document.model')
const UserSchema = require('@userModules/user.model')
const BookingSchema = require('@bookingModules/booking.model')
const BookingPaymentSchema = require('@bookingModules/bookingPayment/bookingPayment.model')
const calculateAncillaryPrice = require("@utils/ancillary");

const createBooking = async (
    {
        quoteSolutionId,
        roomUnitId,
        policy,
        ancillariesData,
        masterGuestData,
        masterGuestAddress,
        masterGuestDocument,
        guestsData,
        paymentData
    }
) => {
    const session = await mongoose.startSession()

    let booking = null

    await session.withTransaction(async () => {
        const quoteSolution = await QuoteSolutionSchema.findById(quoteSolutionId)
            .session(session)
        const quoteRequest = await QuoteRequestSchema.findById(quoteSolution.quoteRequestId)
            .session(session)

        const checkIn = quoteRequest.checkIn
        const checkOut = quoteRequest.checkOut
        const nights = quoteRequest.daysStay
        const adults = quoteRequest.adults
        const children = quoteRequest.children

        const ancillaries = await AncillarySchema.find(
            {
                _id: {$in: ancillariesData}
            }
        ).session(session)

        const ancillaryPriceItems = ancillaries.map(ancillary => {
            const price = calculateAncillaryPrice(ancillary, nights, adults, children)
            return {
                ancillaryId: ancillary._id,
                price
            }
        })

        const ancillariesTotalPrice = ancillaryPriceItems.reduce((sum, ancillary) => sum += ancillary.price, 0)

        const address = new AddressSchema(masterGuestAddress)
        await address.save()

        const document = new DocumentSchema(masterGuestDocument)
        await document.save()

        const masterGuest = new GuestSchema(
            {
                ...masterGuestData,
                isMaster: true,
                addressId: address._id,
                documentId: document._id
            }
        )
        await masterGuest.save({session})

        const newUsername = `${masterGuestData.firstName.toLowerCase()}${masterGuestData.lastName.toLowerCase()}`

        const existingUser = await UserSchema.findOne({
            $or: [
                {email: masterGuestData.email},
                {username: newUsername}
            ]
        }).session(session)

        if (!existingUser) {
            const randomPassword = crypto.randomBytes(6).toString('hex')
            const newUsername = `${masterGuestData.firstName.toLowerCase()}${masterGuestData.lastName.toLowerCase()}`
            const newUser = new UserSchema(
                {
                    firstName: masterGuestData.firstName,
                    lastName: masterGuestData.lastName,
                    email: masterGuestData.email,
                    username: newUsername,
                    password: randomPassword,
                    role: 'guest'
                }
            )
            await newUser.save({session})

            const resetToken = jwt.sign(
                {id: newUser.id},
                process.env.JWT_SECRET,
                {expiresIn: '30m'}
            )

            const resetLink = `${process.env.CLIENT_BASE_URL}/reset-password?token=${resetToken}`

            const emailBody = `
                <h3>Benvenuto!</h3>
                <p>Il tuo account è stato creato con successo</p>
                <p>Per attivare il tuo account, ti chiediamo di <a href="${resetLink}">cliccare qui</a> per impostare la tua password</p>
                <p>La password provvisoria è: <b>${newUser.password}</b></p>
            `

            await sendEmail(savedUser.email, 'Il tuo account è stato creato!', emailBody)
        }

        const guests = await Promise.all(
            guestsData.map(async guestData => {
                const guest = new GuestSchema(guestData)
                await guest.save({session})
                return guest
            })
        )

        const guestsIds = guests.map(guest => guest._id)

        const bookingPayment = new BookingPaymentSchema(paymentData)
        await bookingPayment.save({session})

        booking = new BookingSchema(
            {
                quoteRequestId: quoteRequest._id,
                masterGuestId: masterGuest._id,
                guestsIds,
                roomId: roomUnitId,
                checkIn: checkIn,
                checkOut: checkOut,
                adults: adults,
                children: children,
                hasInfant: quoteRequest.hasInfant,
                policyId: policy.bookingPolicyId._id,
                price: policy.price,
                ancillariesIds: ancillariesData,
                ancillariesPrice: ancillariesTotalPrice,
                totalPrice: paymentData.amount,
                stage: 'confirmed',
                paymentsIds: [bookingPayment._id]
            }
        )
        await booking.save({session})

    }).finally(() => session.endSession())

    return booking
}

module.exports = createBooking