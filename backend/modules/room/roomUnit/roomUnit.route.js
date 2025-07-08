const express = require('express')
const roomUnitController = require('./roomUnit.controller')
const { createValidationRules, updateValidationRules, roomUnitValidator } = require('./roomUnitValidation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const roomUnit = express.Router()

roomUnit.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomUnitController.getAllRoomUnits
)
roomUnit.get("/:roomUnitId",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomUnitController.getRoomUnitById
)
roomUnit.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, roomUnitValidator ],
    roomUnitController.createRoomUnit
)
roomUnit.patch("/:roomUnitId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, roomUnitValidator ],
    roomUnitController.updateRoomUnitById
)
roomUnit.delete("/:roomUnitId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomUnitController.deleteRoomUnitById
)

module.exports = roomUnit