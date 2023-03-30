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
        const expected = DEFAULT_LIST

        const result = await user.all()

       deepEqual(result[0], expected)
    })

    it('Should create a new user', async () => {
        const expected = { created: true }

        const result = await user.create(DEFAULT_ADD)

        deepEqual(result, expected)
    })

})