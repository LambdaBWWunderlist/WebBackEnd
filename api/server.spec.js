const supertest = require('supertest')
const server = require('./server')
const db = require('../data/db-conn')

describe('server.js', () => {

    beforeAll(async () => {
        //Clean the test database before the tests run
        await db('users').truncate()
        await db('items').truncate()
        await db('deleted_items').truncate()

        await db('users').insert(
            {
                id: 1,
                username: "test_user",
                password: "",
                email: "test@mail.com"
            }
        )
    })

    it('should respond with status 200 OK', () => {
        return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })

    it('should respond with { api: "up and running!" }', () => {
        return supertest(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ api: "up and running!" })
            })
    })
})