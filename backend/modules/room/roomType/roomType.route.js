const express = require('express')
const roomTypeController = require('./roomType.controller')
const { createValidationRules, updateValidationRules, roomTypeValidator } = require('./roomTypeValidation')

const roomType = express.Router()

roomType.get("/", roomTypeController.getAllRoomTypes)
roomType.get("/:roomTypeId", roomTypeController.findRoomTypeById)
roomType.post("/create", [ createValidationRules, roomTypeValidator ], roomTypeController.createRoomType)
roomType.patch("/:roomTypeId/edit", [ updateValidationRules, roomTypeValidator ], roomTypeController.updateRoomTypeById)
roomType.delete("/:roomTypeId/delete", roomTypeController.deleteRoomTypeById)

module.exports = roomType