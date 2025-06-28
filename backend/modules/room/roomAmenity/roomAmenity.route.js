const express = require('express')
const roomAmenityController = require('./roomAmenity.controller')

const roomAmenity = express.Router()

roomAmenity.get("/", roomAmenityController.getAllRoomAmenities)
roomAmenity.get("/:roomAmenityId", roomAmenityController.getRoomAmenityById)
roomAmenity.post("/create", roomAmenityController.createRoomAmenity)
roomAmenity.patch("/:roomAmenityId/edit", roomAmenityController.updateRoomAmenityById)
roomAmenity.delete("/:roomAmenityId/delete", roomAmenityController.deleteRoomAmenityById)

module.exports = roomAmenity