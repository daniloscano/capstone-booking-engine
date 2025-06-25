const express = require('express')
const roomBedController = require('./roomBed.controller')

const roomBed = express.Router()

roomBed.get("/", roomBedController.getAllRoomBeds)
roomBed.get("/:roomBedId", roomBedController.getRoomBedById)
roomBed.post("/create", roomBedController.createRoomBed)
roomBed.patch("/:roomBedId/edit", roomBedController.updateRoomBedById)
roomBed.delete("/:roomBedId/delete", roomBedController.deleteRoomBedById)

module.exports = roomBed