const supertest = require('supertest')
const server = require('./server')
const db = require('../data/db-conn')

describe('server.js', () => {

    beforeEach(async () => {
        //Clean the test database before the tests run
        await db('users').truncate()
        await db('items').truncate()
        await db('deleted_items').truncate()

        await db('users').insert(
            {
                id: 1,
                username: "test_user",
                password: "$2y$12$RLDkXom56Pi9cmIEhkoxwe8TWD8eYiMQMNk8DOy6BZoIxpbmc.69W",
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

    describe('POST /api/register', () => {
        it('can register a new user', () => {
            const newUser = {
                username: 'new_user',
                password: 'password',
                email: 'mail@email.com'
            }

            return supertest(server)
                .post('/api/register')
                .send(newUser)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    })

    describe('POST /api/login', () => {
        it('user can login', () => {
            const newUser = {
                username: 'test_user',
                password: 'password'
            }

            return supertest(server)
                .post('/api/login')
                .send(newUser)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.body.token).not.toBeUndefined()
                })
        })
    })
})