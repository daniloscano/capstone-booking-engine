const RoomUnitSchema = require('./roomUnit.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(RoomUnitSchema)

const getALlRoomUnits = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getRoomUnitById = async (roomUnitId) => {
    return RoomUnitSchema.findById(roomUnitId)
}

const createRoomUnit = async (roomUnitData) => {
    const newRoomUnit = new RoomUnitSchema(roomUnitData)
    return await newRoomUnit.save()
}

const updateRoomUnitById = async (roomUnitId, roomUnitData) => {
    return RoomUnitSchema.findByIdAndUpdate(roomUnitId, roomUnitData, { new: true })
}

const deleteRoomUnitById = async (roomUnitId) => {
    return RoomUnitSchema.findByIdAndDelete(roomUnitId)
}

module.exports = {
    getALlRoomUnits,
    getRoomUnitById,
    createRoomUnit,
    updateRoomUnitById,
    deleteRoomUnitById
}