const express = require('express')
const roomBedController = require('./roomBed.controller')
const { createValidationRules, updateValidationRules, roomBedValidator} = require('./roomBedValidation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const roomBed = express.Router()

roomBed.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomBedController.getAllRoomBeds
)
roomBed.get("/:roomBedId",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomBedController.getRoomBedById
)
roomBed.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, roomBedValidator ], roomBedController.createRoomBed
)
roomBed.patch("/:roomBedId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, roomBedValidator ], roomBedController.updateRoomBedById
)
roomBed.delete("/:roomBedId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomBedController.deleteRoomBedById
)

module.exports = roomBed