const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('king')
        .isInt({ min: 0 })
        .withMessage('king must be a positive integer'),
    body('single')
        .isInt({ min: 0 })
        .withMessage('single must be a positive integer'),
    body('crib')
        .isInt({ min: 0 })
        .withMessage('crib must be a positive integer')
]

const updateValidationRules = [
    body('king')
        .isInt({ min: 0 })
        .optional()
        .withMessage('king must be a positive integer'),
    body('single')
        .isInt({ min: 0 })
        .optional()
        .withMessage('single must be a positive integer'),
    body('crib')
        .isInt({ min: 0 })
        .optional()
        .withMessage('crib must be a positive integer')
]

const roomBedValidator = (req, res, next) => {
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
    roomBedValidator
}