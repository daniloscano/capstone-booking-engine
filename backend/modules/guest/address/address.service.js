const AddressSchema = require('./address.model')
const GuestSchema = require('../guest.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(AddressSchema)

const getAllAddresses = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getAddressById = async (addressId) => {
    return AddressSchema.findById(addressId)
}

const createAddress = async (addressData) => {
    const newAddress = new AddressSchema(addressData)
    const savedAddress = await newAddress.save()

    GuestSchema.findByIdAndUpdate({ _id: addressData.guestId }, { addressId: savedAddress._id })

    return savedAddress
}

const updateAddressById = async (addressId, addressData) => {
    return AddressSchema.findByIdAndUpdate(addressId, addressData, { new: true })
}

const deleteAddressById = async (addressId) => {
    const address = await AddressSchema.findByIdAndDelete(addressId)

    await GuestSchema.findByIdAndUpdate({ _id: address.guestId }, { $unset: { addressId: '' } })

    return address
}

module.exports = {
    getAllAddresses,
    getAddressById,
    createAddress,
    updateAddressById,
    deleteAddressById
}