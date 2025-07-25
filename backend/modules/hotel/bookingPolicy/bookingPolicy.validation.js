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
    body('deposit')
        .notEmpty()
        .isString()
        .withMessage('deposit must be a not empty string'),
    body('balance')
        .notEmpty()
        .isString()
        .withMessage('balance must be a not empty string'),
    body('cancellation')
        .notEmpty()
        .isString()
        .withMessage('cancellation must be a not empty string')
]

const updateValidationRules = [
    body('code')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('code must be a not empty string'),
    body('name')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('name must be a not empty string'),
    body('deposit')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('deposit must be a not empty string'),
    body('balance')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('balance must be a not empty string'),
    body('cancellation')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('cancellation must be a not empty string')
]

const bookingPolicyValidator = (req, res, next) => {
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
    bookingPolicyValidator
}