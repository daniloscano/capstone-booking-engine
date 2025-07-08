const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('name')
        .notEmpty()
        .isString()
        .withMessage('name must be a not empty string'),
    body('description')
        .notEmpty()
        .isString()
        .withMessage('description must be a not empty string'),
    body('price')
        .notEmpty()
        .isNumeric({ min: 0 })
        .withMessage('price must be a positive number'),
    body('allocation')
        .notEmpty()
        .isString()
        .isIn([ 'none', 'perNight', 'perOccupancy' ])
        .withMessage('allocation must be a not empty string, either none, perNight or perOccupancy')
]

const updateValidationRules = [
    body('name')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('name must be a not empty string'),
    body('description')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('description must be a not empty string'),
    body('price')
        .notEmpty()
        .optional()
        .isNumeric({ min: 0 })
        .withMessage('price must be a positive number'),
    body('allocation')
        .notEmpty()
        .optional()
        .isString()
        .isIn([ 'none', 'perNight', 'perOccupancy' ])
        .withMessage('allocation must be a not empty string, either none, perNight or perOccupancy')
]

const ancillaryValidator = (req, res, next) => {
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
    ancillaryValidator
}