const router = require('express').Router()

const reqAuth = require('../auth/requires-auth')

const Users = require('./users-model')

router.get('/', reqAuth, (req, res) => {
    Users.find()
        .then(users => {
            if (users.length) {
                res.status(200).json(users)
            }
            else {
                res.status(404).json({ message: 'no users found' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router