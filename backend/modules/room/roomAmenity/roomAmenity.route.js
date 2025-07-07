const express = require('express')
const roomAmenityController = require('./roomAmenity.controller')
const { createValidationRules, updateValidationRules, roomAmenityValidator } = require('./roomAmenityValidation')
const { iconsUpload } = require('@middlewares/multer/index')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const roomAmenity = express.Router()

roomAmenity.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomAmenityController.getAllRoomAmenities
)
roomAmenity.get("/:roomAmenityId",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomAmenityController.getRoomAmenityById
)
roomAmenity.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    iconsUpload().single('icon'),
    [ createValidationRules, roomAmenityValidator ],
    roomAmenityController.createRoomAmenity
)
roomAmenity.patch("/:roomAmenityId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    iconsUpload().single('icon'),
    [ updateValidationRules, roomAmenityValidator ],
    roomAmenityController.updateRoomAmenityById
)
roomAmenity.delete("/:roomAmenityId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomAmenityController.deleteRoomAmenityById
)

module.exports = roomAmenity