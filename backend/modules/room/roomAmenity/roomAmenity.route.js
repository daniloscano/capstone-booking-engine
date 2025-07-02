const express = require('express')
const roomAmenityController = require('./roomAmenity.controller')
const { createValidationRules, updateValidationRules, roomAmenityValidator } = require('./roomAmenityValidation')
const { iconsUpload } = require('@middlewares/multer/index')

const roomAmenity = express.Router()

roomAmenity.get("/", roomAmenityController.getAllRoomAmenities)
roomAmenity.get("/:roomAmenityId", roomAmenityController.getRoomAmenityById)
roomAmenity.post("/create", [ iconsUpload.single('icon'), createValidationRules, roomAmenityValidator ], roomAmenityController.createRoomAmenity)
roomAmenity.patch("/:roomAmenityId/edit", [ updateValidationRules, roomAmenityValidator ], roomAmenityController.updateRoomAmenityById)
roomAmenity.delete("/:roomAmenityId/delete", roomAmenityController.deleteRoomAmenityById)

module.exports = roomAmenity