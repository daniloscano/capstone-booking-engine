const RoomTypeSchema = require('./roomType.model')

const Pagination = require('../../../shared/utils/pagination')
const pagination = new Pagination(RoomTypeSchema)

const getAllRoomTypes = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getRoomTypeById = async (roomTypeId) => {
    return RoomTypeSchema.findById(roomTypeId)
}

const createRoomType = async (roomTypeData) => {
    const newRoomType = new RoomTypeSchema(roomTypeData)
    return await newRoomType.save()
}

const updateRoomTypeById = async (roomTypeId, roomTypeData) => {
    return RoomTypeSchema.findByIdAndUpdate(roomTypeId, roomTypeData, { new: true })
}

const deleteRoomTypeById = async (roomTypeId) => {
    return RoomTypeSchema.findByIdAndDelete(roomTypeId)
}

module.exports = {
    getAllRoomTypes,
    getRoomTypeById,
    createRoomType,
    updateRoomTypeById,
    deleteRoomTypeById
}