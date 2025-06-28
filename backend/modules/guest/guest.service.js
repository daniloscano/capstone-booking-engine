const GuestSchema = require('./guest.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(GuestSchema)

const getAllGuests = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getGuestById = async (guestId) => {
    return GuestSchema.findById(guestId)
}

const createGuest = async (guestData) => {
    const newGuest = new GuestSchema(guestData)
    return await newGuest.save()
}

const updateGuestById = async (guestId, guestData) => {
    return GuestSchema.findByIdAndUpdate(guestId, guestData, { new: true })
}

const deleteGuestById = async (guestId) => {
    return GuestSchema.findByIdAndDelete(guestId)
}

module.exports = {
    getAllGuests,
    getGuestById,
    createGuest,
    updateGuestById,
    deleteGuestById
}