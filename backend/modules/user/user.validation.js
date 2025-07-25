const { body, validationResult } = require('express-validator')

const createValidationRules = [
    body('firstName')
        .notEmpty()
        .isString()
        .isLength({ max: 40 })
        .withMessage('firstName must be a not empty string, with a maximum of 40 characters'),
    body('lastName')
        .notEmpty()
        .isString()
        .isLength({ max: 80 })
        .withMessage('lastName must be a not empty string, with a maximum of 80 characters'),
    body('username')
        .notEmpty()
        .isString()
        .isLength({ min: 3, max: 40 })
        .withMessage('username must be a not empty string, between 3 and 40 characters'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('email must be a not empty string and must be a valid email address'),
    body('password')
        .notEmpty()
        .isString()
        .isLength({ min: 8, max: 16 })
        .withMessage('password must be between 8 and 16 characters')
        .isStrongPassword(
            {
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                returnScore: false
            }
        )
        .withMessage('password must contain at least 1 number and 1 special character'),
    body('role')
        .isString()
        .optional()
        .isIn(['admin', 'manager', 'operator'])
        .withMessage('role must be either admin, manager or operator'),
    body('guestId')
        .optional()
        .isMongoId()
        .withMessage('guestId must be a valid ObjectId')
]

const updateValidationRules = [
    body('firstName')
        .optional()
        .notEmpty()
        .isString()
        .isLength({ max: 40 })
        .withMessage('firstName must be a not empty string, with a maximum of 40 characters'),
    body('lastName')
        .optional()
        .notEmpty()
        .isString()
        .isLength({ max: 80 })
        .withMessage('lastName must be a not empty string, with a maximum of 80 characters'),
    body('username')
        .optional()
        .notEmpty()
        .isString()
        .isLength({ min: 3, max: 40 })
        .withMessage('username must be a not empty string, between 3 and 40 characters'),
    body('email')
        .optional()
        .notEmpty()
        .isEmail()
        .withMessage('email must be a not empty string and must be a valid email address'),
    body('password')
        .optional()
        .notEmpty()
        .isString()
        .isLength({ min: 8, max: 16 })
        .withMessage('password must be between 8 and 16 characters')
        .isStrongPassword(
            {
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                returnScore: false
            }
        )
        .withMessage('password must contain at least 1 number and 1 special character'),
    body('role')
        .isString()
        .optional()
        .isIn(['admin', 'manager', 'operator'])
        .withMessage('role must be either admin, manager or operator'),
    body('guestId')
        .optional()
        .isMongoId()
        .withMessage('guestId must be a valid ObjectId')
]

const userValidator = (req, res, next) => {
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
    userValidator
}