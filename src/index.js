const User = require('./entities/User')
const id   = require('./utils/generateID')
const path = require('path')

const { program } = require('commander')

const user = new User({
    file: path.resolve(__dirname, 'database/db.json')
})

