const express = require('express')
const addressController = require('./address.controller')
const { createValidationRules, updateValidationRules, addressValidator } = require('./addressValidation')

const address = express.Router()

address.get("/", addressController.getAllAddresses)
address.get("/:addressId", addressController.getAddressById)
address.post("/create", [ createValidationRules, addressValidator ], addressController.createAddress)
address.patch("/:addressId/edit", [ updateValidationRules, addressValidator ], addressController.updateAddressById)
address.delete("/:addressId/delete", addressController.deleteAddressById)

module.exports = address