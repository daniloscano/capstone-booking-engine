const express = require('express')
const addressController = require('./address.controller')
const { createValidationRules, updateValidationRules, addressValidator } = require('./addressValidation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const address = express.Router()

address.get("/",
    authMiddleware,
    addressController.getAllAddresses
)
address.get("/:addressId",
    authMiddleware,
    addressController.getAddressById
)
address.post("/create",
    authMiddleware,
    [ createValidationRules, addressValidator ],
    addressController.createAddress
)
address.patch("/:addressId/edit",
    authMiddleware,
    [ updateValidationRules, addressValidator ],
    addressController.updateAddressById
)
address.delete("/:addressId/delete",
    authMiddleware,
    addressController.deleteAddressById
)

module.exports = address