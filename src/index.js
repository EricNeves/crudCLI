const User = require('./entities/User')
const id   = require('./utils/generateID')
const path = require('path')

const user = new User({
    file: path.resolve(__dirname, 'database/db.json')
})

user.all()
    .then(res => {
        console.log(typeof res)
    })