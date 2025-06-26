const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('roomTypeId')
        .isMongoId()
        .optional()
        .withMessage('roomTypeId must be a valid ObjectId'),
    body('totalUnits')
        .isInt({ min: 0 })
        .optional()
        .withMessage('totalUnits must be a positive integer or zero'),
    body('soldUnits')
        .isInt({ min: 0 })
        .optional()
        .withMessage('soldUnits must be a positive integer or zero'),
    body('availableUnits')
        .isInt({ min: 0 })
        .optional()
        .withMessage('availableUnits must be a positive integer or zero'),
    body('date')
        .isDate()
        .withMessage('date must be a valid ISO Date, yyyy-mm-dd'),
    body('basePrice')
        .isDecimal({ min: 0 })
        .withMessage('basePrice must be a positive decimal'),
    body('basePriceIncrement')
        .isDecimal({ min: 0 })
        .withMessage('basePriceIncrement must be a positive decimal'),
    body('price')
        .isDecimal({ min: 0 })
        .withMessage('price must be a positive decimal'),
    body('extraAdultMultiplier')
        .isDecimal({ min: 0 })
        .withMessage('extraAdultMultiplier must be a positive decimal'),
    body('extraChildMultiplier')
        .isDecimal({ min: 0 })
        .withMessage('extraChildMultiplier must be a positive decimal')
]

const updateValidationRules = [
    body('roomTypeId')
        .isMongoId()
        .optional()
        .withMessage('roomTypeId must be a valid ObjectId'),
    body('totalUnits')
        .isInt({ min: 0 })
        .optional()
        .withMessage('totalUnits must be a positive integer or zero'),
    body('soldUnits')
        .isInt({ min: 0 })
        .optional()
        .withMessage('soldUnits must be a positive integer or zero'),
    body('availableUnits')
        .isInt({ min: 0 })
        .optional()
        .withMessage('availableUnits must be a positive integer or zero'),
    body('date')
        .isDate()
        .optional()
        .withMessage('date must be a valid ISO Date, yyyy-mm-dd'),
    body('basePrice')
        .isDecimal({ min: 0 })
        .optional()
        .withMessage('basePrice must be a positive decimal'),
    body('basePriceIncrement')
        .isDecimal({ min: 0 })
        .optional()
        .withMessage('basePriceIncrement must be a positive decimal'),
    body('price')
        .isDecimal({ min: 0 })
        .optional()
        .withMessage('price must be a positive decimal'),
    body('extraAdultMultiplier')
        .isDecimal({ min: 0 })
        .optional()
        .withMessage('extraAdultMultiplier must be a positive decimal'),
    body('extraChildMultiplier')
        .isDecimal({ min: 0 })
        .optional()
        .withMessage('extraChildMultiplier must be a positive decimal')
]

const roomRateValidator = (req, res, next) => {
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
    roomRateValidator
}