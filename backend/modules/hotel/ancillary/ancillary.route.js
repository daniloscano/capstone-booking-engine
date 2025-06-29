const express = require('express')
const ancillaryController = require('./ancillary.controller')

const ancillary = express.Router()

ancillary.get("/", ancillaryController.getAllAncillaries)
ancillary.get("/:ancillaryId", ancillaryController.getAncillaryById)
ancillary.post("/create", ancillaryController.createAncillary)
ancillary.patch("/:ancillaryId/edit", ancillaryController.updateAncillaryById)
ancillary.delete("/:ancillaryId/delete", ancillaryController.deleteAncillaryById)

module.exports = ancillary