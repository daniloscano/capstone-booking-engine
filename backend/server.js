require('module-alias/register')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const databaseConnection = require('./shared/config/database')
const PORT = process.env.PORT || 9099


const checkAvailabilityRoute = require('@checkAvailabilityModules/checkAvailability.route')
const userRoute = require('@userModules/user.route')
const roomTypeRoute = require('@roomModules/roomType/roomType.route')
const roomBedRoute = require('@roomModules/roomBed/roomBed.route')
const roomUnitRoute = require('@roomModules/roomUnit/roomUnit.route')
const roomRateRoute = require('@roomModules/roomRate/roomRate.route')
const roomAmenityRoute = require('@roomModules/roomAmenity/roomAmenity.route')
const guestRoute = require('@guestModules/guest.route')
const addressRoute = require('@guestModules/address/address.route')
const documentRoute = require('@guestModules/document/document.route')
const ancillaryRoute = require('@hotelModules/ancillary/ancillary.route')
const bookingPolicyRoute = require('@hotelModules/bookingPolicy/bookingPolicy.route')
const bookingRoute = require('@bookingModules/booking.route')
const bookingPaymentRoute = require('@bookingModules/bookingPayment/bookingPayment.route')
const quoteRequestRoute = require('@quoteRequestModules/quoteRequest.route')
const quoteSolutionRoute = require('@quoteRequestModules/quoteSolution/quoteSolution.route')
const errorHandler = require('./shared/middlewares/errorHandler')


const server = express()
server.use(express.json())
server.use(cors())

server.use("/check-availability", checkAvailabilityRoute)
server.use("/users", userRoute)
server.use("/roomTypes", roomTypeRoute)
server.use("/roomBeds", roomBedRoute)
server.use("/roomUnits", roomUnitRoute)
server.use("/roomRates", roomRateRoute)
server.use("/roomAmenities", roomAmenityRoute)
server.use("/guests", guestRoute)
server.use("/addresses", addressRoute)
server.use("/documents", documentRoute)
server.use("/ancillaries", ancillaryRoute)
server.use("/bookingPolicies", bookingPolicyRoute)
server.use("/bookings", bookingRoute)
server.use("/bookingPayments", bookingPaymentRoute)
server.use("/quoteRequests", quoteRequestRoute)
server.use("/quoteSolutions", quoteSolutionRoute)

server.use(errorHandler)


databaseConnection()

server.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`)
})