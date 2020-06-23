const {
    validateRegistration,
    validateLogin,
    generateToken,
    hashPassword

} = require('./users-service')

describe('users-service.js', () => {

    describe('validateRegistration()', () => {

        it('should validate req.body', () => {
            const reqPass = {
                username: 'user',
                password: 'password',
                email: 'email@mail.com'
            }

            const reqFail = {
                username: 'user',
                password: 'password'
            }

            expect(validateRegistration(reqPass)).toBeTruthy()
            expect(validateRegistration(reqFail)).toBeFalsy()
        })
    })

    describe('validateLogin()', () => {

        it('should validate req.body', () => {
            const reqPass = {
                username: 'user',
                password: 'password'
            }

            const reqFail = {
                username: 'user',
            }

            expect(validateLogin(reqPass)).toBeTruthy()
            expect(validateLogin(reqFail)).toBeFalsy()
        })
    })

    describe('generateToken()', () => {

        it('should return a JWT', () => {
            const user = {
                id: 1,
                username: "user",
            }

            expect(generateToken(user)).not.toEqual(user)
        })
    })

    describe('hashPassword()', () => {

        it('should return a hashed password', () => {

            const password = "password"

            expect(hashPassword(password)).not.toEqual(password)
        })
    })
})