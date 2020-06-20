const jwt = require('jsonwebtoken')
const jwtKey = require('../config/constants').jwt_key

const bcrypt = require('bcryptjs')
const salt = require('../config/constants').hash_salt

module.exports = {
    validateRegistration,
    validateLogin,
    generateToken,
    hashPassword
}

//Validates required keys are present on request body
function validateRegistration(user) {
    return Boolean(user.username && user.password && user.email)
}

//Validates required keys are present on request body
function validateLogin(user) {
    return Boolean(user.username && user.password)
}

//Generates a JWT
function generateToken(user) {

    payload = {
        sub: user.id,
        username: user.username
    }

    options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, jwtKey, options)
}

function hashPassword(password) {
    return bcrypt.hashSync(password, salt)
}