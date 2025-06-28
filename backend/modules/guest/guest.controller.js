const guestService = require('./guest.service')
const GuestNotFoundException = require("@guestExceptions/guestNotFoundException")

const getAlGuests = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const guests = await guestService.getAllGuests(page, pageSize)

        if (guests.data.length === 0) {
            throw new GuestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    guests
                }
            )
    } catch (err) {
        next(err)
    }
}

const getGuestById = async (req, res, next) => {
    const { guestId } = req.params

    try {
        const guest = await guestService.getGuestById(guestId)

        if (!guest) {
            throw new GuestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    guest
                }
            )
    } catch (err) {
        next(err)
    }
}

const createGuest = async (req, res, next) => {
    const guestData = req.body

    try {
        const guest = await guestService.createGuest(guestData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `Guest ${guest._id} created successfully!`,
                    guest
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateGuestById = async (req, res, next) => {
    const { guestId } = req.params
    const guestData = req.body

    try {
        const guest = await guestService.updateGuestById(guestId, guestData)

        if (!guest) {
            throw new GuestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Guest ${guest._id} updated successfully!`,
                    guest
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteGuestById = async (req, res, next) => {
    const { guestId } = req.params

    try {
        const guest = await guestService.deleteGuestById(guestId)

        if (!guest) {
            throw new GuestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Guest ${guest._id} deleted successfully!`,
                    guest
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAlGuests,
    getGuestById,
    createGuest,
    updateGuestById,
    deleteGuestById
}