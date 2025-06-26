const express = require('express')
const roomUnitController = require('./roomUnit.controller')
const { createValidationRules, updateValidationRules, roomUnitValidator } = require('./roomUnitValidation')

const roomUnit = express.Router()

roomUnit.get("/", roomUnitController.getAllRoomUnits)
roomUnit.get("/:roomUnitId", roomUnitController.getRoomUnitById)
roomUnit.post("/create", [ createValidationRules, roomUnitValidator ], roomUnitController.createRoomUnit)
roomUnit.patch("/:roomUnitId/edit", [ updateValidationRules, roomUnitValidator ], roomUnitController.updateRoomUnitById)
roomUnit.delete("/:roomUnitId/delete", roomUnitController.deleteRoomUnitById)

module.exports = roomUnit