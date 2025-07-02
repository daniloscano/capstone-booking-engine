const express = require('express')
const roomTypeController = require('./roomType.controller')
const { createValidationRules, updateValidationRules, roomTypeValidator } = require('./roomTypeValidation')
const { roomsUpload } = require('@middlewares/multer/index')

const roomType = express.Router()

roomType.get("/", roomTypeController.getAllRoomTypes)
roomType.get("/:roomTypeId", roomTypeController.findRoomTypeById)
roomType.post("/create", [ roomsUpload.array('images', 5), createValidationRules, roomTypeValidator ], roomTypeController.createRoomType)
roomType.patch("/:roomTypeId/edit", [ roomsUpload.array('images', 5), updateValidationRules, roomTypeValidator ], roomTypeController.updateRoomTypeById)
roomType.delete("/:roomTypeId/delete", roomTypeController.deleteRoomTypeById)

module.exports = roomType