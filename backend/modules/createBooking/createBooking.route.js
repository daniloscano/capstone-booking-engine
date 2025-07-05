const express = require('express')
const createBookingController = require('./createBooking.controller')

const createBooking = express.Router()

createBooking.post("/:quoteSolutionId", createBookingController)

module.exports = createBooking