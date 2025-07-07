const authorizedRoles = (...allowedRoles) => {
    return async (req, res, next) => {
        try {
            if (req.user && allowedRoles.includes(req.user.role)) {
                return next()
            }

            return res
                .status(403)
                .send(
                    {
                        statusCode: 403,
                        message: 'Forbidden: you do not have permissions to access this resource'
                    }
                )
        } catch (err) {
            next(err)
        }
    }
}

module.exports = authorizedRoles