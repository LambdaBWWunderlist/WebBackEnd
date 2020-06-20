const router = require('express').Router()

const reqAuth = require('../auth/requires-auth')

const Users = require('./users-model')

//Returns an array of all users
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

//Returns the specified user
router.get('/:id', reqAuth, (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            }
            else {
                res.status(404).json({ message: 'invalid user id' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

//Updates the specified user and returns the updated user
router.put('/:id', reqAuth, (req, res) => {

})

//Destroys the specified user from the database and returns the deleted user
router.delete('/:id', reqAuth, (req, res) => {
    const { id } = req.params

    Users.remove(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            }
            else {
                res.status(404).json({ message: 'user not found. no records deleted' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router