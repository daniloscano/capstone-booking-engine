const roomBedService = require('./roomBed.service')
const RoomBedNotFoundException = require("../../../shared/exceptions/room/roombed/roomBedNotFoundException")

const getAllRoomBeds = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const roomBeds = await roomBedService.getAllRoomBeds(page, pageSize)

        if (roomBeds.data.length === 0) {
            throw new RoomBedNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomBeds
                }
            )
    } catch (err) {
        next(err)
    }
}

const getRoomBedById = async (req, res, next) => {
    const { roomBedId } = req.params

    try {
        const roomBed = await roomBedService.getRoomBedById(roomBedId)

        if (!roomBed) {
            throw new RoomBedNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roombed
                }
            )
    } catch (err) {
        next(err)
    }
}

const createRoomBed = async (req, res, next) => {
    const roomBedData = req.body

    try {
        const roomBed = await roomBedService.createRoomBed(roomBedData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `RoomBed ${roomBed._id} created successfully!`,
                    roomBed
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateRoomBedById = async (req, res, next) => {
    const { roomBedId } = req.params
    const roomBedData = req.body

    try {
        const roomBed = await roomBedService.updateRoomBedById(roomBedId, roomBedData)

        if (!roomBed) {
            throw new RoomBedNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomBed ${roomBed._id} updated successfully!`,
                    roomBed
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteRoomBedById = async (req, res, next) => {
    const { roomBedId } = req.params

    try {
        const roomBed = await roomBedService.deleteRoomBedById(roomBedId)

        if (!roomBed) {
            throw new RoomBedNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomBed ${roomBed._id} deleted successfully!`,
                    roomBed
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllRoomBeds,
    getRoomBedById,
    createRoomBed,
    updateRoomBedById,
    deleteRoomBedById
}