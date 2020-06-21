const router = require('express').Router()

const reqAuth = require('../auth/requires-auth')

const DelItems = require('./deleted-model')

//Creates a new item associated with a specific user and returns the newly created item
router.post('/:id', reqAuth, (req, res) => {
    const { id } = req.params
    const { undelete } = req.body

    if (undelete === 'recover') {
        DelItems.undelete(id)
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
    }
    else {
        res.status(400).json({ message: 'bad request. to recover item send { undelete: "recover" } in request body' })
    }
})

//Returns an array containing all the items for a specified user. 
//Returns empty array if user exists but has no items
router.get('/:user_id', reqAuth, (req, res) => {
    const { user_id } = req.params

    DelItems.find(user_id)
        .then(items => {
            res.status(200).json(items)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })

})

router.delete('/:id', reqAuth, (req, res) => {
    const { id } = req.params

    DelItems.remove(id)
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