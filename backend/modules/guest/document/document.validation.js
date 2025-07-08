const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('guestId')
        .optional()
        .isMongoId()
        .withMessage('guestId must be a valid ObjectId'),
    body('type')
        .notEmpty()
        .isString()
        .isIn([ 'id card', 'driving license', 'passport' ])
        .withMessage('type must be either id card, driving license, passport'),
    body('number')
        .notEmpty()
        .isString()
        .withMessage('number must be a not empty string'),
    body('expireDate')
        .notEmpty()
        .isDate()
        .withMessage('expireDate must be a valid date')
]

const updateValidationRules = [
    body('guestId')
        .optional()
        .isMongoId()
        .withMessage('guestId must be a valid ObjectId'),
    body('type')
        .optional()
        .notEmpty()
        .isString()
        .isIn([ 'id card', 'driving license', 'passport' ])
        .withMessage('type must be either id card, driving license, passport'),
    body('number')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('number must be a not empty string'),
    body('expireDate')
        .optional()
        .notEmpty()
        .isDate()
        .withMessage('expireDate must be a valid date')
]

const documentValidator = (req, res, next) => {
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
    documentValidator
}