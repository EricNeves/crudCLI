/**
 * @description Default values to tests 
*/

const id = require('./src/utils/generateID')

const DEFAULT_LIST = { 
    id: 1, 
    username: 'Eric Neves', 
    email: 'ericnevesr@gmail.com' 
}

const DEFAULT_ADD = {
    id: id(),
    username: 'Dominique',
    email: 'dominique@crud.com'
}

module.exports = { DEFAULT_LIST, DEFAULT_ADD }