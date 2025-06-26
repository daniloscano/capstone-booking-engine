const express = require('express')
const roomRateController = require('./roomRate.controller')
const { createValidationRules, updateValidationRules, roomRateValidator } = require('./roomRateValidation')

const roomRate = express.Router()

roomRate.get("/", roomRateController.getAllRoomRates)
roomRate.get("/:roomRateId", roomRateController.getRoomRateById)
roomRate.post("/create", [ createValidationRules, roomRateValidator ], roomRateController.createRoomRate)
roomRate.patch("/:roomRateId/edit", [ updateValidationRules, roomRateValidator ], roomRateController.updateRoomRateById)
roomRate.delete("/:roomRateId/delete", roomRateController.deleteRoomRateById)

module.exports = roomRate