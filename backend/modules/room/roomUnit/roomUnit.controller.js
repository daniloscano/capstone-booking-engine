const roomUnitService = require('./roomUnit.service')
const RoomUnitNotFoundException = require("@roomExceptions/roomUnit/roomUnitNotFoundException")

const getAllRoomUnits = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const roomUnits = await roomUnitService.getALlRoomUnits(page, pageSize)

        if (roomUnits.data.length === 0) {
            throw new RoomUnitNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomUnits
                }
            )
    } catch (err) {
        next(err)
    }
}

const getRoomUnitById = async (req, res, next) => {
    const { roomUnitId } = req.params

    try {
        const roomUnit = await roomUnitService.getRoomUnitById(roomUnitId)

        if (!roomUnit) {
            throw new RoomUnitNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    roomUnit
                }
            )
    } catch (err) {
        next(err)
    }
}

const createRoomUnit = async (req, res, next) => {
    const roomUnitData = req.body

    try {
        const roomUnit = await roomUnitService.createRoomUnit(roomUnitData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `RoomUnit ${roomUnit._id} created successfully!`,
                    roomUnit
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateRoomUnitById = async (req, res, next) => {
    const { roomUnitId } = req.params
    const roomUnitData = req.body

    try {
        const roomUnit = await roomUnitService.updateRoomUnitById(roomUnitId, roomUnitData)

        if (!roomUnit) {
            throw new RoomUnitNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomUnit ${roomUnit._id} updated successfully!`,
                    roomUnit
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteRoomUnitById = async (req, res, next) => {
    const { roomUnitId } = req.params

    try {
        const roomUnit = await roomUnitService.deleteRoomUnitById(roomUnitId)

        if (!roomUnit) {
            throw new RoomUnitNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `RoomUnit ${roomUnit._id} deleted successfully!`,
                    roomUnit
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllRoomUnits,
    getRoomUnitById,
    createRoomUnit,
    updateRoomUnitById,
    deleteRoomUnitById
}