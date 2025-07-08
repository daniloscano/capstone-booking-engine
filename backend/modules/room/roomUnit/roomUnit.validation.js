const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('number')
        .isInt({ min: 0 })
        .withMessage('number must be a positive integer'),
    body('roomTypeId')
        .isMongoId()
        .withMessage('roomTypeId must be a valid ObjectId')
]

const updateValidationRules = [
    body('number')
        .isInt({ min: 0 })
        .optional()
        .withMessage('number must be a positive integer'),
    body('roomTypeId')
        .isMongoId()
        .optional()
        .withMessage('roomTypeId must be a valid ObjectId')
]

const roomUnitValidator = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .send(
                {
                    ...errors
                }
            )
    }

    next()
}

module.exports = {
    createValidationRules,
    updateValidationRules,
    roomUnitValidator
}