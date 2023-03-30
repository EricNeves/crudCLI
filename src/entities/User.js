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

        const existsID = all.find(( { id } ) => id === data.id)
        if (existsID) return `[!] User already exists!` 

        all.push(data)
        await writeFile(this.file, JSON.stringify(all, null, 4))

        return {
            created: true
        }
    }

    async findByID(userID) {
        const all = await this.all()
        if (!userID) return all

        const user = all.find(({ id }) => id === userID)
        if(!user) return `[!] UserID ${userID} not found!`

        return user
    }

    async edit(userID, data) {
        const all = await this.all()

        const userIndex = all.findIndex(({ id }) => id === userID)

        if (userIndex === -1) return `[!] UserID ${userID} not found!`
        
        const currentData = all[userIndex]
        all.splice(userIndex, 1)

        const dataUP = Object.assign({}, currentData, data)

        await writeFile(this.file, JSON.stringify([...all, dataUP], null, 4))

        return {
            updated: true
        }
    }
    
    async remove(userID) {
        const all = await this.all()

        const userIndex = all.findIndex(({ id }) => id === userID)

        if (userIndex === -1) return `[!] UserID ${userID} not found!`

        all.splice(userIndex, 1)

        await writeFile(this.file, JSON.stringify(all, null, 4))

        return {
            removed: true
        }
    }
}

module.exports = User