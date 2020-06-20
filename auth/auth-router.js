const router = require('express').Router()

//Hash
const bcrypt = require('bcryptjs')
const salt = require('../config/constants').hash_salt

//Users Model
const Users = require('../users/users-model')

//Register a new user
router.post('/register', (req, res) => {
    const credentials = req.body

    if (credentials) {

        //Hash the password before sending to db to be stored
        const hash = bcrypt.hashSync(credentials.password, salt)
        credentials.password = hash

        Users.insert(credentials)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    }
    else {
        res.status(400).json({ message: 'please provide username, password and/or email' })
    }
})

//Log in an existing user
router.post('/login', (req, res) => {
    res.status(201).json({ message: 'login successful' })
})

module.exports = router