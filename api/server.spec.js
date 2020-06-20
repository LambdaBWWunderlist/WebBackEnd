const supertest = require('supertest')
const server = require('./server')

describe('server.js', () => {

    it('should respond with status 200 OK', () => {
        return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
})