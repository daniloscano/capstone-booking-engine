const express = require('express')
const guestController = require('./guest.controller')

const guest = express.Router()

guest.get("/", guestController.getAlGuests)
guest.get("/:guestId", guestController.getGuestById)
guest.post("/create", guestController.createGuest)
guest.patch("/:guestId/edit", guestController.updateGuestById)
guest.delete("/:guestId/delete", guestController.deleteGuestById)

module.exports = guest