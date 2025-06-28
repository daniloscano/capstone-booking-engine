const RoomAmenitySchema = require('./roomAmenity.model')

const Pagination = require('../../../shared/utils/pagination')
const pagination = new Pagination(RoomAmenitySchema)

const getAllRoomAmenities = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getRoomAmenityById = async (roomAmenityId) => {
    return RoomAmenitySchema.findById(roomAmenityId)
}

const createRoomAmenity = async (roomAmenityData) => {
    const newRoomAmenity = new RoomAmenitySchema(roomAmenityData)
    return await newRoomAmenity.save()
}

const updateRoomAmenityById = async (roomAmenityId, roomAmenityData) => {
    return RoomAmenitySchema.findByIdAndUpdate(roomAmenityId, roomAmenityData, { new: true })
}

const deleteRoomAmenityById = async (roomAmenityId) => {
    return RoomAmenitySchema.findByIdAndDelete(roomAmenityId)
}

module.exports = {
    getAllRoomAmenities,
    getRoomAmenityById,
    createRoomAmenity,
    updateRoomAmenityById,
    deleteRoomAmenityById
}