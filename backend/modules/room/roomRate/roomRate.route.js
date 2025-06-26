const express = require('express')
const roomRateController = require('./roomRate.controller')

const roomRate = express.Router()

roomRate.get("/", roomRateController.getAllRoomRates)
roomRate.get("/:roomRateId", roomRateController.getRoomRateById)
roomRate.post("/create", roomRateController.createRoomRate)
roomRate.patch("/:roomRateId/edit", roomRateController.updateRoomRateById)
roomRate.delete("/:roomRateId/delete", roomRateController.deleteRoomRateById)

module.exports = roomRate