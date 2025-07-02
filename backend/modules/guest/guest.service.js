const GuestSchema = require('./guest.model')
const AddressSchema = require('./address/address.model')
const DocumentSchema = require('./document/document.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(GuestSchema)

const fieldsToPopulate = [
    {
        path: 'bookingsIds',
        select: 'checkIn checkOut adults children hasCrib',
        populate: {
            path: 'roomId',
            select: 'number',
            populate: {
                path: 'roomTypeId',
                select: 'type category'
            }
        }
    },
    {
        path: 'addressId',
        select: 'street city zipCode region nation'
    },
    {
        path: 'documentId',
        select: 'type number expireDate'
    }
]

const getAllGuests = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort, fieldsToPopulate)
}

const getGuestById = async (guestId) => {
    return GuestSchema.findById(guestId)
        .populate(fieldsToPopulate)
}

const createGuest = async (guestData) => {
    const newGuest = new GuestSchema(guestData)
    return await newGuest.save()
}

const updateGuestById = async (guestId, guestData) => {
    return GuestSchema.findByIdAndUpdate(guestId, guestData, { new: true })
}

const deleteGuestById = async (guestId) => {
    const guest = await GuestSchema.findByIdAndDelete(guestId)

    await AddressSchema.findOneAndDelete({ guestId: guestId })
    await DocumentSchema.findOneAndDelete({ guestId: guestId })

    return guest
}

module.exports = {
    getAllGuests,
    getGuestById,
    createGuest,
    updateGuestById,
    deleteGuestById
}