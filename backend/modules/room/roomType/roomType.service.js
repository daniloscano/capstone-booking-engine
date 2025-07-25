const RoomTypeSchema = require('./roomType.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(RoomTypeSchema)

const fieldToPopulate = [
    {
        path: 'bedsId',
        select: 'king single crib layout'
    },
    {
        path: 'amenitiesIds',
        select: 'code name icon'
    }
]

const getAllRoomTypes = async (page, pageSize, filter, sort = { _id: 1 }) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort, fieldToPopulate)
}

const getRoomTypeById = async (roomTypeId) => {
    return RoomTypeSchema.findById(roomTypeId)
        .populate(fieldToPopulate)
}

const createRoomType = async (roomTypeData) => {
    const newRoomType = new RoomTypeSchema(roomTypeData)
    return await newRoomType.save()
}

const updateRoomTypeById = async (roomTypeId, roomTypeData) => {
    return RoomTypeSchema.findByIdAndUpdate(roomTypeId, roomTypeData, {new: true})
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