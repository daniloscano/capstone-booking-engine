const ancillaryService = require('./ancillary.service')
const AncillaryNotFoundException = require("@hotelExceptions/ancillary/ancillaryNotFoundException")

const getAllAncillaries = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const ancillaries = await ancillaryService.getAllAncillaries(page, pageSize)

        if (ancillaries.data.length === 0) {
            throw new AncillaryNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    ancillaries
                }
            )
    } catch (err) {
        next(err)
    }
}

const getAncillaryById = async (req, res, next) => {
    const { ancillaryId } = req.params

    try {
        const ancillary = await ancillaryService.getAncillaryById(ancillaryId)

        if (!ancillary) {
            throw new AncillaryNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    ancillary
                }
            )
    } catch (err) {
        next(err)
    }
}

const createAncillary = async (req, res, next) => {
    const ancillaryData = req.body

    try {
        const ancillary = await ancillaryService.createAncillary(ancillaryData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `Ancillary ${ancillary._id} created successfully!`,
                    ancillary
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateAncillaryById = async (req, res, next) => {
    const { ancillaryId } = req.params
    const ancillaryData = req.body

    try {
        const ancillary = await ancillaryService.updateAncillaryById(ancillaryId, ancillaryData)

        if (!ancillary) {
            throw new AncillaryNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Ancillary ${ancillary._id} updated successfully!`,
                    ancillary
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteAncillaryById = async (req, res, next) => {
    const { ancillaryId } = req.params

    try {
        const ancillary = await ancillaryService.deleteAncillaryById(ancillaryId)

        if (!ancillary) {
            throw new AncillaryNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Ancillary ${ancillary._id} deleted successfully!`,
                    ancillary
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllAncillaries,
    getAncillaryById,
    createAncillary,
    updateAncillaryById,
    deleteAncillaryById
}