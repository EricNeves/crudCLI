const { deepEqual, ok } = require('assert')

const User = require('./src/entities/User')
const id   = require('./src/utils/generateID')
const path = require('path')

const user = new User({
    file: path.resolve(__dirname, './src/database/db.json')
})

const DEFAULT_LIST = { 
    id: 1, 
    username: 'Eric Neves', 
    email: 'ericnevesr@gmail.com' 
}

describe('CRUD CLI Test', () => {

    it('Should list all users', async () => {
        const expected = DEFAULT_LIST

        const result = await user.all()

       deepEqual(result[0], expected)
    })

})