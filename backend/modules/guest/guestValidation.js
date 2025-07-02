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
        .isLength({ max: 40 })
        .withMessage('lastName must be a not empty string, with a maximum of 80 characters'),
    body('gender')
        .optional()
        .notEmpty()
        .isString()
        .isIn([ 'male', 'female' ])
        .withMessage('gender must be either male or female'),
    body('isMaster')
        .isBoolean()
        .withMessage('isMaster must be a boolean value (true/false)'),
    body('bookingsIds')
        .optional()
        .isArray()
        .withMessage('bookingsIds must be a valid array'),
    body('bookingsIds.*')
        .isMongoId()
        .withMessage('bookingsIds value must be a valid ObjectId'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('email must be a valid one'),
    body('phone')
        .isMobilePhone()
        .withMessage('phone must be a valid one'),
    body('addressId')
        .optional()
        .isMongoId()
        .withMessage('addressId must be a valid ObjectId'),
    body('dateOfBirth')
        .isDate()
        .withMessage('dateOfBirth must be a valid date'),
    body('documentId')
        .optional()
        .isMongoId()
        .withMessage('documentId must be a valid ObjectId')
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
        .isLength({ max: 40 })
        .withMessage('lastName must be a not empty string, with a maximum of 80 characters'),
    body('gender')
        .optional()
        .notEmpty()
        .isString()
        .isIn([ 'male', 'female' ])
        .withMessage('gender must be either male or female'),
    body('isMaster')
        .optional()
        .isBoolean()
        .withMessage('isMaster must be a boolean value (true/false)'),
    body('bookingsIds')
        .optional()
        .isArray()
        .withMessage('bookingsIds must be a valid array'),
    body('bookingsIds.*')
        .isMongoId()
        .withMessage('bookingsIds value must be a valid ObjectId'),
    body('email')
        .optional()
        .notEmpty()
        .isEmail()
        .withMessage('email must be a valid one'),
    body('phone')
        .optional()
        .isMobilePhone()
        .withMessage('phone must be a valid one'),
    body('addressId')
        .optional()
        .isMongoId()
        .withMessage('addressId must be a valid ObjectId'),
    body('dateOfBirth')
        .optional()
        .isDate()
        .withMessage('dateOfBirth must be a valid date'),
    body('documentId')
        .optional()
        .isMongoId()
        .withMessage('documentId must be a valid ObjectId')
]

const guestValidator = (req, res, next) => {
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
    guestValidator
}