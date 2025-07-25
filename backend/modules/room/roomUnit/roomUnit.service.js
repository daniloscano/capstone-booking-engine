const RoomUnitSchema = require('./roomUnit.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(RoomUnitSchema)

const getALlRoomUnits = async (page, pageSize, filter, sort) => {
    const fieldToPopulate = {
        path: 'roomTypeId',
        select: 'name type category',
        populate: {
            path: 'bedsId',
            select: 'layout'
        }
    }
    return await pagination.getPaginatedData(page, pageSize, filter, sort, fieldToPopulate)
}

const getRoomUnitById = async (roomUnitId) => {
    return RoomUnitSchema.findById(roomUnitId)
        .populate(
            {
                path: 'roomTypeId',
                select: 'name type category',
                populate: {
                    path: 'bedsId',
                    select: 'layout'
                }
            }
        )
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