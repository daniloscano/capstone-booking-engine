const express = require('express')
const checkRoomAvailabilityController = require('./roomAvailability.controller')

const roomAvailability = express.Router()

roomAvailability.get("/:quoteSolutionId", checkRoomAvailabilityController)

module.exports = roomAvailability