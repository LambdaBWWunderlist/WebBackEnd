const jwt = require('jsonwebtoken')
const jwtKey = require('../config/constants').jwt_key

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, jwtKey, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: 'access denied: invalid token' })
            }
            else {
                req.decodedToken
                next()
            }
        })
    }
    else {
        res.status(401).json({ message: 'you need to login to access this resource' })
    }
}