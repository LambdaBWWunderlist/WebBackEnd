const router = require('express').Router()

const reqAuth = require('../auth/requires-auth')
const validateRecurring = require('./validate-recurring')

const Items = require('./items-model')

//Creates a new item associated with a specific user and returns the newly created item
router.post('/', reqAuth, validateRecurring, (req, res) => {
    const { name, user_id } = req.body

    if (name && user_id) {
        Items.insert(req.body)
            .then(item => {
                if (item) {
                    res.status(201).json(item)
                }
                else {
                    res.status(404).json({ message: 'invalid user_id' })
                }
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    }
    else {
        res.status(400).json({ message: 'please provide necessary fields' })
    }
})

//Returns an array containing all the items for a specified user. 
//Returns empty array if user exists but has no items
router.get('/:user_id', reqAuth, (req, res) => {
    const { user_id } = req.params

    Items.find(user_id)
        .then(items => {
            if (items) {
                res.status(200).json(items)
            }
            else {
                res.status(400).json({ message: 'inavlid user_id' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })


})

//Updates a specified item by item id and returns the newly updated item
router.put('/:id', reqAuth, validateRecurring, (req, res) => {
    const { id } = req.params
    const item = req.body

    //Need to fix the time format to match what the server creates initially
    const timestamp = new Date()
    item.updated_at = timestamp.toISOString()

    Items.update(item, id)
        .then(item => {
            if (item) {
                res.status(200).json(item)
            }
            else {
                res.status(404).json({ message: 'requested item not found' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.delete('/:id', reqAuth, (req, res) => {
    const { id } = req.params

    Items.remove(id)
        .then(item => {
            if (item) {
                res.status(200).json(item)
            }
            else {
                res.status(404).json({ message: 'item not found. no records deleted' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router