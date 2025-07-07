const express = require('express')
const roomTypeController = require('./roomType.controller')
const { createValidationRules, updateValidationRules, roomTypeValidator } = require('./roomTypeValidation')
const { roomsUpload } = require('@middlewares/multer/index')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const roomType = express.Router()

roomType.get("/", roomTypeController.getAllRoomTypes)
roomType.get("/:roomTypeId", roomTypeController.findRoomTypeById)
roomType.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomsUpload().array('images', 5),
    [ createValidationRules, roomTypeValidator ],
    roomTypeController.createRoomType
)
roomType.patch("/:roomTypeId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomsUpload().array('images', 5),
    [ updateValidationRules, roomTypeValidator ],
    roomTypeController.updateRoomTypeById
)
roomType.delete("/:roomTypeId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    roomTypeController.deleteRoomTypeById
)

module.exports = roomType