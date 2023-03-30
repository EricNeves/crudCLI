const {
    readFile, writeFile
} = require("fs/promises")

class User {
    constructor({ file }) {
        this.file = file
    }

    async all() {
        return JSON.parse(await readFile(this.file))
    }

    async create(data) {
        
    }
}

module.exports = User