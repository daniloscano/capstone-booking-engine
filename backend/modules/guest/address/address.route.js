const express = require('express')
const addressController = require('./address.controller')

const address = express.Router()

address.get("/", addressController.getAllAddresses)
address.get("/:addressId", addressController.getAddressById)
address.post("/create", addressController.createAddress)
address.patch("/:addressId/edit", addressController.updateAddressById)
address.delete("/:addressId/delete", addressController.deleteAddressById)

module.exports = address