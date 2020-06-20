const express = require('express')

const server = express()

//Middleware
const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())

//Routes
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')
const itemsRouter = require('../items/items-router')

//Endpoints
server.use('/api', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running!' })
})

module.exports = server