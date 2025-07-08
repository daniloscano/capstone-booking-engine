const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('code')
        .notEmpty()
        .isString()
        .withMessage('code must be a not empty string'),
    body('name')
        .notEmpty()
        .isString()
        .withMessage('name must be a not empty string'),
    body('icon')
        .notEmpty()
        .isString()
        .withMessage('icon must be a not empty string')
]

const updateValidationRules = [
    body('code')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('code must be a not empty string'),
    body('name')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('name must be a not empty string'),
    body('icon')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('icon must be a not empty string')
]

const roomAmenityValidator = (req, res, next) => {
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
    roomAmenityValidator
}