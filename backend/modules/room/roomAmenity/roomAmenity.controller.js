const roomAmenityService = require('./roomAmenity.service')
const RoomAmenityNotFoundException = require("@roomExceptions/roomAmenity/roomAmenityNotFoundException")

const getAllRoomAmenities = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const roomAmenities = await roomAmenityService.getAllRoomAmenities(page, pageSize)

        if (roomAmenities.data.length === 0) {
            throw new RoomAmenityNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomAmenities
                }
            )
    } catch (err) {
        next(err)
    }
}

const getRoomAmenityById = async (req, res, next) => {
    const { roomAmenityId } = req.params

    try {
        const roomAmenity = await roomAmenityService.getRoomAmenityById(roomAmenityId)

        if (!roomAmenity) {
            throw new RoomAmenityNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomAmenity
                }
            )
    } catch (err) {
        next(err)
    }
}

const createRoomAmenity = async (req, res, next) => {
    const roomAmenityData = req.body
    const { file } = req

    try {
        if (file && file.path) {
            roomAmenityData.icon = file.path
        }

        const roomAmenity = await roomAmenityService.createRoomAmenity(roomAmenityData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `RoomAmenity ${roomAmenity._id} created successfully!`,
                    roomAmenity
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateRoomAmenityById = async (req, res, next) => {
    const { roomAmenityId } = req.params
    const roomAmenityData = req.body
    const { file } = req

    try {
        if (file && file.path) {
            roomAmenityData.icon = file.path
        }
        const roomAmenity = await roomAmenityService.updateRoomAmenityById(roomAmenityId, roomAmenityData)

        if (!roomAmenity) {
            throw new RoomAmenityNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomAmenity ${roomAmenity._id} updated successfully!`,
                    roomAmenity
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteRoomAmenityById = async (req, res, next) => {
    const { roomAmenityId } = req.params

    try {
        const roomAmenity = await roomAmenityService.deleteRoomAmenityById(roomAmenityId)

        if (!roomAmenity) {
            throw new RoomAmenityNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomAmenity ${roomAmenity._id} deleted successfully!`,
                    roomAmenity
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllRoomAmenities,
    getRoomAmenityById,
    createRoomAmenity,
    updateRoomAmenityById,
    deleteRoomAmenityById
}
