const express = require('express')
const checkAvailabilityController = require('./checkAvailability.controller')

const checkAvailability = express.Router()

checkAvailability.post("/", checkAvailabilityController)

module.exports = checkAvailability