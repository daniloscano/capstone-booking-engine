const express = require('express')
const roomRateController = require('./roomRate.controller')
const { createValidationRules, updateValidationRules, roomRateValidator } = require('./roomRate.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const roomRate = express.Router()

roomRate.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomRateController.getAllRoomRates
)
roomRate.get("/:roomRateId",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomRateController.getRoomRateById
)
roomRate.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, roomRateValidator ], roomRateController.createRoomRate
)
roomRate.patch("/:roomRateId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, roomRateValidator ], roomRateController.updateRoomRateById
)
roomRate.delete("/:roomRateId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomRateController.deleteRoomRateById
)

module.exports = roomRate