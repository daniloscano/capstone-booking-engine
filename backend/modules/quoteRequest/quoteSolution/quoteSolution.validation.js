const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('quoteRequestId')
        .isMongoId()
        .withMessage('quoteRequestId must be a valid ObjectId'),
    body('roomTypeId')
        .isMongoId()
        .withMessage('roomTypeId must be a valid ObjectId'),
    body('bookingPolicyId')
        .isMongoId()
        .withMessage('bookingPolicyId must be a valid ObjectId'),
    body('price')
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage('price must be a positive number'),
    body('isConfirmed')
        .optional()
        .isBoolean()
        .withMessage('isConfirmed must be a boolean value')
]

const updateValidationRules = [
    body('quoteRequestId')
        .optional()
        .isMongoId()
        .withMessage('quoteRequestId must be a valid ObjectId'),
    body('roomTypeId')
        .optional()
        .isMongoId()
        .withMessage('roomTypeId must be a valid ObjectId'),
    body('bookingPolicyId')
        .optional()
        .isMongoId()
        .withMessage('bookingPolicyId must be a valid ObjectId'),
    body('price')
        .optional()
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage('price must be a positive number'),
    body('isConfirmed')
        .optional()
        .isBoolean()
        .withMessage('isConfirmed must be a boolean value')
]

const quoteSolutionValidator = (req, res, next) => {
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
    quoteSolutionValidator
}