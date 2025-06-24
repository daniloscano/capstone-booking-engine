const express = require('express')
const roomTypeController = require('../../controllers/room/roomType.controller')

const roomType = express.Router()

roomType.get("/", roomTypeController.getAllRoomTypes)
roomType.get("/:roomTypeId", roomTypeController.findRoomTypeById)
roomType.post("/create", roomTypeController.createRoomType)
roomType.patch("/:roomTypeId/edit", roomTypeController.updateRoomTypeById)
roomType.delete("/:roomTypeId/delete", roomTypeController.deleteRoomTypeById)

module.exports = roomType