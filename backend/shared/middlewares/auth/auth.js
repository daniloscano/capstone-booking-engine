const jwt = require('jsonwebtoken')
const InvalidOrMissingTokenException = require("@authExceptions/InvalidOrMissingTokenException");

const authMiddleware = async (req, res, next) => {
    const token = req.header('authorization')

    if (!token) {
        throw new InvalidOrMissingTokenException()
    }

    try {
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verifiedToken

        next()
    } catch (err) {
        throw new InvalidOrMissingTokenException()
    }
}

module.exports = authMiddleware