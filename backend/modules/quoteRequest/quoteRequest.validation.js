const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('checkIn')
        .notEmpty()
        .isDate()
        .withMessage('checkIn must be a valid Date'),
    body('checkOut')
        .notEmpty()
        .isDate()
        .withMessage('checkOut must be a valid Date'),
    body('daysStay')
        .optional()
        .notEmpty()
        .isInt()
        .withMessage('daysStay must be zero or a positive integer'),
    body('adults')
        .notEmpty()
        .isInt()
        .withMessage('adults must be zero or a positive integer'),
    body('children')
        .notEmpty()
        .isInt()
        .withMessage('children must be zero or a positive integer'),
    body('hasInfant')
        .isBoolean()
        .withMessage('hasInfant must be boolean value: true or false'),
    body('quoteSolutionsIds')
        .optional()
        .isArray()
        .withMessage('quoteSolutionsIds must be a valid array'),
    body('quoteSolutionsIds.*')
        .optional()
        .isMongoId()
        .withMessage('quoteSolutionsIds item must be a valid ObjectId'),
    body('isConfirmed')
        .optional()
        .isBoolean()
        .withMessage('isConfirmed must be boolean value: true or false'),
    body('expire')
        .optional()
        .isDate()
        .withMessage('expire must be a valid Date'),
    body('isExpired')
        .optional()
        .isBoolean()
        .withMessage('isConfirmed must be boolean value: true or false')
]

const updateValidationRules = [
    body('checkIn')
        .optional()
        .notEmpty()
        .isDate()
        .withMessage('checkIn must be a valid Date'),
    body('checkOut')
        .optional()
        .notEmpty()
        .isDate()
        .withMessage('checkOut must be a valid Date'),
    body('daysStay')
        .optional()
        .notEmpty()
        .isInt()
        .withMessage('daysStay must be zero or a positive integer'),
    body('adults')
        .optional()
        .notEmpty()
        .isInt()
        .withMessage('adults must be zero or a positive integer'),
    body('children')
        .optional()
        .notEmpty()
        .isInt()
        .withMessage('children must be zero or a positive integer'),
    body('hasInfant')
        .optional()
        .isBoolean()
        .withMessage('hasInfant must be boolean value: true or false'),
    body('quoteSolutionsIds')
        .optional()
        .isArray()
        .withMessage('quoteSolutionsIds must be a valid array'),
    body('quoteSolutionsIds.*')
        .optional()
        .isMongoId()
        .withMessage('quoteSolutionsIds item must be a valid ObjectId'),
    body('isConfirmed')
        .optional()
        .isBoolean()
        .withMessage('isConfirmed must be boolean value: true or false'),
    body('expire')
        .optional()
        .isDate()
        .withMessage('expire must be a valid Date'),
    body('isExpired')
        .optional()
        .isBoolean()
        .withMessage('isConfirmed must be boolean value: true or false')
]

const quoteRequestValidator = (req, res, next) => {
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
    quoteRequestValidator
}