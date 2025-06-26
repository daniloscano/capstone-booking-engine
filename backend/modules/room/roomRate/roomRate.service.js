const RoomRateSchema = require('./roomRate.model')

const Pagination = require('../../../shared/utils/pagination')
const pagination = new Pagination(RoomRateSchema)

const getAllRoomRates = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getRoomRateById = async (roomRateId) => {
    return RoomRateSchema.findById(roomRateId)
}

const createRoomRate = async (roomRateData) => {
    const newRoomRate = new RoomRateSchema(roomRateData)
    return await newRoomRate.save()
}

const updateRoomRateById = async (roomRateId, roomRateData) => {
    return RoomRateSchema.findByIdAndUpdate(roomRateId, roomRateData, { new: true })
}

const deleteRoomRateById = async (roomRateId) => {
    return RoomRateSchema.findByIdAndDelete(roomRateId)
}

module.exports = {
    getAllRoomRates,
    getRoomRateById,
    createRoomRate,
    updateRoomRateById,
    deleteRoomRateById
}