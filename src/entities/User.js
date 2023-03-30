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

    async findByID(userID) {
        const all = await this.all()
        if (!userID) return all

        const user = all.find(({ id }) => id === userID)

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
    async atualizar(id, atualizacoes) {
        const dados = await this.obterArquivo();
        const indice = dados.findIndex(item => item.id === parseInt(id));
        if (indice === -1) {
          throw Error('heroi não existe!');
        }
    
        const atual = dados[indice];
        dados.splice(indice, 1);
    
        //workaround para remover valores undefined do objeto
        const objAtualizado = JSON.parse(JSON.stringify(atualizacoes));
        const dadoAtualizado = Object.assign({}, atual, objAtualizado);
    
        return await this.escreverArquivo([...dados, dadoAtualizado]);
      }
}

module.exports = User