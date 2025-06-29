const express = require('express')
const ancillaryController = require('./ancillary.controller')
const { createValidationRules, updateValidationRules, ancillaryValidator } = require('./ancillaryValidation')

const ancillary = express.Router()

ancillary.get("/", ancillaryController.getAllAncillaries)
ancillary.get("/:ancillaryId", ancillaryController.getAncillaryById)
ancillary.post("/create", [ createValidationRules, ancillaryValidator ], ancillaryController.createAncillary)
ancillary.patch("/:ancillaryId/edit", [ updateValidationRules, ancillaryValidator ], ancillaryController.updateAncillaryById)
ancillary.delete("/:ancillaryId/delete", ancillaryController.deleteAncillaryById)

module.exports = ancillary