const roomRateService = require('./roomRate.service')
const RoomRateNotFoundException = require("../../../shared/exceptions/room/roomRate/roomRateNotFoundException")

const getAllRoomRates = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const roomRates = await roomRateService.getAllRoomRates(page, pageSize)

        if (roomRates.data.length === 0) {
            throw new RoomRateNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomRates
                }
            )
    } catch (err) {
        next(err)
    }
}

const getRoomRateById = async (req, res, next) => {
    const { roomRateId } = req.params

    try {
        const roomRate = await roomRateService.getRoomRateById(roomRateId)

        if (!roomRate) {
            throw new RoomRateNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomRate
                }
            )
    } catch (err) {
        next(err)
    }
}

const createRoomRate = async (req, res, next) => {
    const roomRateData = req.body

    try {
        const roomRate = await roomRateService.createRoomRate(roomRateData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `RoomRate ${roomRate._id} created successfully!`,
                    roomRate
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateRoomRateById = async (req, res, next) => {
    const { roomRateId } = req.params
    const roomRateData = req.body

    try {
        const roomRate = await roomRateService.updateRoomRateById(roomRateId, roomRateData)

        if (!roomRate) {
            throw new RoomRateNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomRate ${roomRate._id} updated successfully!`,
                    roomRate
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteRoomRateById = async (req, res, next) => {
    const { roomRateId } = req.params

    try {
        const roomRate = await roomRateService.deleteRoomRateById(roomRateId)

        if (!roomRate) {
            throw new RoomRateNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomRate ${roomRate._id} deleted successfully!`,
                    roomRate
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllRoomRates,
    getRoomRateById,
    createRoomRate,
    updateRoomRateById,
    deleteRoomRateById
}