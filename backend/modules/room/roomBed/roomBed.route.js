const express = require('express')
const roomBedController = require('./roomBed.controller')
const { createValidationRules, updateValidationRules, roomBedValidator} = require('./roomBedValidation')

const roomBed = express.Router()

roomBed.get("/", roomBedController.getAllRoomBeds)
roomBed.get("/:roomBedId", roomBedController.getRoomBedById)
roomBed.post("/create", [ createValidationRules, roomBedValidator ], roomBedController.createRoomBed)
roomBed.patch("/:roomBedId/edit", [ updateValidationRules, roomBedValidator ], roomBedController.updateRoomBedById)
roomBed.delete("/:roomBedId/delete", roomBedController.deleteRoomBedById)

module.exports = roomBed