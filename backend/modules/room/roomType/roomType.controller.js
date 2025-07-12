const roomTypeService = require('./roomType.service')
const RoomTypeNotFoundException = require("@roomExceptions/roomType/roomTypeNotFoundException")

const getAllRoomTypes = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const roomTypes = await roomTypeService.getAllRoomTypes(page, pageSize)

        if (roomTypes.data.length === 0) {
            throw new RoomTypeNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    ...roomTypes
                }
            )
    } catch (err) {
        next(err)
    }
}

const findRoomTypeById = async (req, res, next) => {
    const { roomTypeId } = req.params

    try {
        const roomType = await roomTypeService.getRoomTypeById(roomTypeId)

        if (!roomType) {
            throw new RoomTypeNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomType
                }
            )
    } catch (err) {
        next(err)
    }
}

const createRoomType = async (req, res, next) => {
    const roomTypeData = req.body
    const { files } = req

    try {
        if (files && files.length > 0) {
            roomTypeData.images = files.map(file => file.path)
        }

        const roomType = await roomTypeService.createRoomType(roomTypeData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `RoomType ${roomType._id} created successfully!`,
                    roomType
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateRoomTypeById = async (req, res, next) => {
    const { roomTypeId } = req.params
    const roomTypeData = req.body
    const { files } = req

    try {
        if (files && files.length > 0) {
            roomTypeData.images = files.map(file => file.path)
        }

        const roomType = await roomTypeService.updateRoomTypeById(roomTypeId, roomTypeData)

        if (!roomType) {
            throw new RoomTypeNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomType ${roomType._id} updated successfully!`,
                    roomType
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteRoomTypeById = async (req, res, next) => {
    const { roomTypeId } = req.params

    try {
        const roomType = await roomTypeService.deleteRoomTypeById(roomTypeId)

        if (!roomType) {
            throw new RoomTypeNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomType ${roomType._id} deleted successfully!`,
                    roomType
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllRoomTypes,
    findRoomTypeById,
    createRoomType,
    updateRoomTypeById,
    deleteRoomTypeById
}