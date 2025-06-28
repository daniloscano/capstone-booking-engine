const addressService = require('./address.service')
const AddressNotFoundException = require("@guestExceptions/address/addressNotFoundException")

const getAllAddresses = async (req, res, next) => {
    const {page = 1, pageSize = 10} = req.query

    try {
        const addresses = await addressService.getAllAddresses(page, pageSize)

        if (addresses.data.length === 0) {
            throw new AddressNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    addresses
                }
            )
    } catch (err) {
        next(err)
    }
}

const getAddressById = async (req, res, next) => {
    const { addressId } = req.params

    try {
        const address = await addressService.getAddressById(addressId)

        if (!address) {
            throw new AddressNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    address
                }
            )
    } catch (err) {
        next(err)
    }
}

const createAddress = async (req, res, next) => {
    const addressData = req.body

    try {
        const address = await addressService.createAddress(addressData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `Address ${address._id} created successfully!`,
                    address
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateAddressById = async (req, res, next) => {
    const { addressId } = req.params
    const addressData = req.body

    try {
        const address = await addressService.updateAddressById(addressId, addressData)

        if (!address) {
            throw new AddressNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Address ${address._id} updated successfully!`,
                    address
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteAddressById = async (req, res, next) => {
    const { addressId } = req.params

    try {
        const address = await addressService.deleteAddressById(addressId)

        if (!address) {
            throw new AddressNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Address ${address._id} deleted successfully!`,
                    address
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllAddresses,
    getAddressById,
    createAddress,
    updateAddressById,
    deleteAddressById
}