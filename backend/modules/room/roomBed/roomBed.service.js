const RoomBedSchema = require('./roomBed.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(RoomBedSchema)

const getAllRoomBeds = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getRoomBedById = async (roomBedId) => {
    return RoomBedSchema.findById(roomBedId)
}

const createRoomBed = async (roomBedData) => {
    const newRoomBed = new RoomBedSchema(roomBedData)
    return await newRoomBed.save()
}

const updateRoomBedById = async (roomBedId, roomBedData) => {
    return RoomBedSchema.findByIdAndUpdate(roomBedId, roomBedData, { new: true })
}

const deleteRoomBedById = async (roomBedId) => {
    return RoomBedSchema.findByIdAndDelete(roomBedId)
}

module.exports = {
    getAllRoomBeds,
    getRoomBedById,
    createRoomBed,
    updateRoomBedById,
    deleteRoomBedById
}