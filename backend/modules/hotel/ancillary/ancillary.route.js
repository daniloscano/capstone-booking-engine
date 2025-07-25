const express = require('express')
const ancillaryController = require('./ancillary.controller')
const { createValidationRules, updateValidationRules, ancillaryValidator } = require('./ancillary.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const ancillary = express.Router()

ancillary.get("/",
    ancillaryController.getAllAncillaries
)
ancillary.get("/:ancillaryId",
    ancillaryController.getAncillaryById
)
ancillary.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, ancillaryValidator ], ancillaryController.createAncillary
)
ancillary.patch("/:ancillaryId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, ancillaryValidator ],
    ancillaryController.updateAncillaryById
)
ancillary.delete("/:ancillaryId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    ancillaryController.deleteAncillaryById
)

module.exports = ancillary