const express = require('express')
const roomUnitController = require('./roomUnit.controller')

const roomUnit = express.Router()

roomUnit.get("/", roomUnitController.getAllRoomUnits)
roomUnit.get("/:roomUnitId", roomUnitController.getRoomUnitById)
roomUnit.post("/create", roomUnitController.createRoomUnit)
roomUnit.patch("/:roomUnitId/edit", roomUnitController.updateRoomUnitById)
roomUnit.delete("/:roomUnitId/delete", roomUnitController.deleteRoomUnitById)

module.exports = roomUnit