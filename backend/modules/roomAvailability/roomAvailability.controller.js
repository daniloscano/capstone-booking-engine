const checkRoomAvailabilityService = require('./roomAvailability.service')

const checkRoomAvailability = async (req, res, next) => {
    const { quoteSolutionId } = req.params

    try {
        const availability = await checkRoomAvailabilityService(quoteSolutionId)

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    availability
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = checkRoomAvailability