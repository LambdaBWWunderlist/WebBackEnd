const router = require('express').Router()

const reqAuth = require('../auth/requires-auth')

const Items = require('./items-model')

router.post('/', reqAuth, (req, res) => {
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

module.exports = router