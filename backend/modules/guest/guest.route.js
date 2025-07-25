const express = require('express')
const guestController = require('./guest.controller')
const { createValidationRules, updateValidationRules, guestValidator } = require('./guest.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const guest = express.Router()

guest.get("/",
    authMiddleware,
    guestController.getAllGuests
)
guest.get("/:guestId",
    authMiddleware,
    guestController.getGuestById
)
guest.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, guestValidator ], guestController.createGuest
)
guest.patch("/:guestId/edit",
    authMiddleware,
    [ updateValidationRules, guestValidator ], guestController.updateGuestById
)
guest.delete("/:guestId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    guestController.deleteGuestById
)

module.exports = guest