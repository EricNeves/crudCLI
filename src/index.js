const User = require('./entities/User')
const id   = require('./utils/generateID')
const path = require('path')

const user = new User({
    file: path.resolve(__dirname, 'database/db.json')
})

user.create({
    id: id(),
    username: "Dominique",
    email: "d.@gmail.com"
})
    .then(res => console.log(res))