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
        const all = await this.all()
        all.push(data)

        await writeFile(this.file, JSON.stringify(all, null, 4))

        return {
            created: true
        }
    }
}

module.exports = User