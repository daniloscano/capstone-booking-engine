const AddressSchema = require('./address.model')

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
    return await newAddress.save()
}

const updateAddressById = async (addressId, addressData) => {
    return AddressSchema.findByIdAndUpdate(addressId, addressData, { new: true })
}

const deleteAddressById = async (addressId) => {
    return AddressSchema.findByIdAndDelete(addressId)
}

module.exports = {
    getAllAddresses,
    getAddressById,
    createAddress,
    updateAddressById,
    deleteAddressById
}