const router = require('express').Router()
const {
    validateRegistration,
    validateLogin,
    generateToken,
    hashPassword

} = require('../users/users-service')

//Users Model
const Users = require('../users/users-model')

//Register a new user
router.post('/register', (req, res) => {
    const credentials = req.body

    if (validateRegistration(credentials)) {
        //Hash the password before sending to db to be stored
        credentials.password = hashPassword(credentials.password)

        //Insert new user details into DB. If successful returns the newly created user
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
    const { username, password } = req.body

    if (validateLogin(req.body)) {
        Users.findBy({ username })
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user)

                    res.status(200).json({ token, message: `${username} is logged in` })
                }
                else {
                    res.status(401).json({ message: 'access denied: invalid credentials' })
                }
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    }
    else {
        res.status(400).json({ message: 'please provide login credentials' })
    }
})

module.exports = router