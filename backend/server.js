const express = require('express')
require('dotenv').config()
const cors = require('cors')
const databaseConnection = require('./shared/config/database')
const PORT = process.env.PORT || 9099

const userRoute = require('./modules/user/user.route')
const roomTypeRoute = require('./modules/room/roomType/roomType.route')
const roomBedRoute = require('./modules/room/roomBed/roomBed.route')
const roomUnitRoute = require('./modules/room/roomUnit/roomUnit.route')
const roomRateRoute = require('./modules/room/roomRate/roomRate.route')
const roomAmenityRoute = require('./modules/room/roomAmenity/roomAmenity.route')
const errorHandler = require('./shared/middlewares/errorHandler')

const server = express()
server.use(express.json())
server.use(cors())

server.use("/users", userRoute)
server.use("/roomTypes", roomTypeRoute)
server.use("/roomBeds", roomBedRoute)
server.use("/roomUnits", roomUnitRoute)
server.use("/roomRates", roomRateRoute)
server.use("/roomAmenities", roomAmenityRoute)
server.use(errorHandler)

databaseConnection()

server.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`)
})