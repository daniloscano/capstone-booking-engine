const express = require('express')
const guestController = require('./guest.controller')
const { createValidationRules, updateValidationRules, guestValidator } = require('./guestValidation')

const guest = express.Router()

guest.get("/", guestController.getAllGuests)
guest.get("/:guestId", guestController.getGuestById)
guest.post("/create", [ createValidationRules, guestValidator ], guestController.createGuest)
guest.patch("/:guestId/edit", [ updateValidationRules, guestValidator ], guestController.updateGuestById)
guest.delete("/:guestId/delete", guestController.deleteGuestById)

module.exports = guest