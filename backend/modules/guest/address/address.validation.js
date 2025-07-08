const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('guestId')
        .isMongoId()
        .withMessage('guestId must be a valid ObjectId'),
    body('street')
        .notEmpty()
        .isString()
        .withMessage('address must be a not empty string'),
    body('zipCode')
        .notEmpty()
        .isString()
        .withMessage('zipCode must be a not empty string'),
    body('city')
        .notEmpty()
        .isString()
        .withMessage('city must be a not empty string'),
    body('region')
        .notEmpty()
        .isString()
        .withMessage('region must be a not empty string'),
    body('nation')
        .notEmpty()
        .isString()
        .withMessage('nation must be a not empty string')
]

const updateValidationRules = [
    body('guestId')
        .optional()
        .isMongoId()
        .withMessage('guestId must be a valid ObjectId'),
    body('street')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('address must be a not empty string'),
    body('zipCode')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('zipCode must be a not empty string'),
    body('city')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('city must be a not empty string'),
    body('region')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('region must be a not empty string'),
    body('nation')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('nation must be a not empty string')
]

const addressValidator = (req, res, next) => {
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
    addressValidator
}