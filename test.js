const User = require('./src/entities/User')
const path = require('path')

const { deepEqual, ok } = require('assert')
const { 
    DEFAULT_LIST, DEFAULT_ADD
} = require('./test.default')

const user = new User({
    file: path.resolve(__dirname, './src/database/db.json')
})

describe('CRUD CLI Test', () => {
    it('Should list all users', async () => {
        const expected = []

        const result = await user.all()

        deepEqual(typeof result, typeof expected)
    })

    it('Should create a new user', async () => {
        const expected = { created: true }

        const result = await user.create(DEFAULT_ADD)

        deepEqual(result, expected)
    })

    it('Should list user by ID', async () => {
        const expected = DEFAULT_LIST

        const result = await user.findByID(expected.id)

        deepEqual(result, expected)
    })

    it('Should edit user by ID', async () => {
        const expected = { updated: true }

        const result = await user.edit(DEFAULT_LIST.id)

        deepEqual(result, expected)
    })
})