const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('bookingId')
        .notEmpty()
        .isMongoId()
        .withMessage('bookingId must be a valid ObjectId'),
    body('type')
        .notEmpty()
        .isString()
        .isIn([ 'deposit', 'balance' ])
        .withMessage('type must be a not empty string, must be either deposit or balance'),
    body('amount')
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage('amount must be a positive number'),
    body('isCompleted')
        .isBoolean()
        .withMessage('isCompleted must be a boolean value'),
    body('completedDate')
        .notEmpty()
        .isDate()
        .withMessage('completedDate must be a valid date')
]

const updateValidationRules = [
    body('bookingId')
        .optional()
        .notEmpty()
        .isMongoId()
        .withMessage('bookingId must be a valid ObjectId'),
    body('type')
        .optional()
        .notEmpty()
        .isString()
        .isIn([ 'deposit', 'balance' ])
        .withMessage('type must be a not empty string, must be either deposit or balance'),
    body('amount')
        .optional()
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage('amount must be a positive number'),
    body('isCompleted')
        .optional()
        .isBoolean()
        .withMessage('isCompleted must be a boolean value'),
    body('completedDate')
        .optional()
        .notEmpty()
        .isDate()
        .withMessage('completedDate must be a valid date')
]

const bookingPaymentValidator = (req, res, next) => {
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
    bookingPaymentValidator
}