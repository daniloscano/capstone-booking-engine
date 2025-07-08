const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('quoteRequestId')
        .optional()
        .isMongoId()
        .withMessage('quoteRequestId must be a valid ObjectId'),
    body('masterGuestId')
        .optional()
        .isMongoId()
        .withMessage('masterGuestId must be a valid ObjectId'),
    body('guestsIds')
        .optional()
        .isArray()
        .withMessage('guestsIds must be a valid Array'),
    body('guestsIds.*')
        .optional()
        .isMongoId()
        .withMessage('guestsIds item must be a valid ObjectId'),
    body('roomId')
        .optional()
        .isMongoId()
        .withMessage('roomId must be a valid ObjectId'),
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
    body('policyId')
        .optional()
        .isMongoId()
        .withMessage('policyId must be a valid ObjectId'),
    body('price')
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage('price must be zero or a positive number'),
    body('ancillariesIds')
        .optional()
        .isArray()
        .withMessage('ancillariesIds must be a valid Array'),
    body('ancillariesIds.*')
        .optional()
        .isMongoId()
        .withMessage('ancillariesIds item must be a valid ObjectId'),
    body('ancillariesPrice')
        .notEmpty()
        .isFloat()
        .withMessage('ancillariesPrice must be zero or a positive number'),
    body('totalPrice')
        .notEmpty()
        .isFloat()
        .withMessage('totalPrice must be zero or a positive number'),
    body('stage')
        .notEmpty()
        .isString()
        .isIn([ 'waiting for deposit', 'waiting for balance', 'confirmed', 'canceled' ])
        .withMessage('stage must be a not empty string'),
    body('paymentsIds')
        .optional()
        .isArray()
        .withMessage('paymentsIds must be a valid Array'),
    body('paymentsIds.*')
        .optional()
        .isMongoId()
        .withMessage('paymentsIds item must be a valid ObjectId')
]

const updateValidationRules = [
    body('quoteRequestId')
        .optional()
        .isMongoId()
        .withMessage('quoteRequestId must be a valid ObjectId'),
    body('masterGuestId')
        .optional()
        .isMongoId()
        .withMessage('masterGuestId must be a valid ObjectId'),
    body('guestsIds')
        .optional()
        .isArray()
        .withMessage('guestsIds must be a valid Array'),
    body('guestsIds.*')
        .optional()
        .isMongoId()
        .withMessage('guestsIds item must be a valid ObjectId'),
    body('roomId')
        .optional()
        .isMongoId()
        .withMessage('roomId must be a valid ObjectId'),
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
    body('policyId')
        .optional()
        .isMongoId()
        .withMessage('policyId must be a valid ObjectId'),
    body('price')
        .optional()
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage('price must be zero or a positive number'),
    body('ancillariesIds')
        .optional()
        .isArray()
        .withMessage('ancillariesIds must be a valid Array'),
    body('ancillariesIds.*')
        .optional()
        .isMongoId()
        .withMessage('ancillariesIds item must be a valid ObjectId'),
    body('ancillariesPrice')
        .optional()
        .notEmpty()
        .isFloat()
        .withMessage('ancillariesPrice must be zero or a positive number'),
    body('totalPrice')
        .optional()
        .notEmpty()
        .isFloat()
        .withMessage('totalPrice must be zero or a positive number'),
    body('stage')
        .optional()
        .notEmpty()
        .isString()
        .isIn([ 'waiting for deposit', 'waiting for balance', 'confirmed', 'canceled' ])
        .withMessage('stage must be a not empty string'),
    body('paymentsIds')
        .optional()
        .isArray()
        .withMessage('paymentsIds must be a valid Array'),
    body('paymentsIds.*')
        .optional()
        .isMongoId()
        .withMessage('paymentsIds item must be a valid ObjectId')
]

const bookingValidator = (req, res, next) => {
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
    bookingValidator
}