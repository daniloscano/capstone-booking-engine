const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('name')
        .notEmpty()
        .isString()
        .withMessage('name must be a not empty string'),
    body('type')
        .notEmpty()
        .isString()
        .isLength({ max: 5 })
        .withMessage('type must be a not empty string, with a maximum of 5 characters'),
    body('category')
        .notEmpty()
        .isString()
        .isLength({ max: 5 })
        .withMessage('category must be a not empty string, with a maximum of 5 characters'),
    body('description')
        .notEmpty()
        .isString()
        .withMessage('description must be a not empty string'),
    body('bedsId')
        .optional()
        .isMongoId()
        .withMessage('bedsId must be a valid ObjectId'),
    body('amenitiesIds')
        .optional()
        .isArray()
        .withMessage('amenitiesIds must be an array'),
    body('amenitiesIds.*')
        .isMongoId()
        .withMessage('each amenitiesId must be a valid ObjectId'),
    body('dimensions')
        .notEmpty()
        .isString()
        .withMessage('dimensions must be a not empty string'),
    body('images')
        .isArray()
        .withMessage('images must be an array'),
    body('images.*')
        .notEmpty()
        .isString()
        .withMessage('each image must be a not empty string'),
    body('baseOccupancy')
        .isInt({ min: 0 })
        .withMessage('baseOccupancy must be a positive integer'),
    body('maxOccupancy')
        .isInt({ min: 0 })
        .withMessage('maxOccupancy must be a positive integer'),
    body('hasCrib')
        .isBoolean()
        .withMessage('hasCrib must be a Boolean'),
    body('ordinal')
        .isInt({ min: 0 })
        .withMessage('ordinal must be a positive integer')
]

const updateValidationRules = [
    body('name')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('name must be a not empty string'),
    body('type')
        .notEmpty()
        .optional()
        .isString()
        .isLength({ max: 5 })
        .withMessage('type must be a not empty string, with a maximum of 5 characters'),
    body('category')
        .notEmpty()
        .optional()
        .isString()
        .isLength({ max: 5 })
        .withMessage('category must be a not empty string, with a maximum of 5 characters'),
    body('description')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('description must be a not empty string'),
    body('bedsId')
        .isMongoId()
        .optional()
        .withMessage('bedsId must be a valid ObjectId'),
    body('amenitiesIds')
        .isArray()
        .optional()
        .withMessage('amenitiesIds must be an array'),
    body('amenitiesIds.*')
        .isMongoId()
        .optional()
        .withMessage('each amenitiesId must be a valid ObjectId'),
    body('dimensions')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('dimensions must be a not empty string'),
    body('images')
        .isArray()
        .optional()
        .withMessage('images must be an array'),
    body('images.*')
        .notEmpty()
        .optional()
        .isString()
        .withMessage('each image must be a not empty string'),
    body('baseOccupancy')
        .isInt({ min: 0 })
        .optional()
        .withMessage('baseOccupancy must be a positive integer'),
    body('maxOccupancy')
        .isInt({ min: 0 })
        .optional()
        .withMessage('maxOccupancy must be a positive integer'),
    body('hasCrib')
        .isBoolean()
        .optional()
        .withMessage('hasCrib must be a Boolean'),
    body('ordinal')
        .isInt({ min: 0 })
        .optional()
        .withMessage('ordinal must be a positive integer')
]

const roomTypeValidator = (req, res, next) => {
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
    roomTypeValidator
}