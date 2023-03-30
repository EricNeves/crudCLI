![Database Image](.github/database.png)

#### CRUD CLI

![Commit](https://img.shields.io/github/last-commit/ericneves/crudcli?color=success&label=commit&logo=appveyor&logoColor=success&style=flat-square)
![Commit](https://img.shields.io/github/license/EricNeves/crudcli?color=success&logo=appveyor&logoColor=success&style=flat-square)

<p>CRUD CLI, projeto desenvolvido que consiste em fazer operações (<strong>CREATE, READ, UPDATE & DELETE</strong>) via <strong>Command Line Interface</strong>, basicamnte operando em informações armazenas em um arquivo local de formato <strong>JSON</strong>.</p>

<p>A aplicação foi desenvolvida com <strong>NodeJS</strong>, utilizando ferramentas como <strong>CommandJS</strong> para manipular os valores passados via <strong>CLI</strong> e <strong>MochaJS</strong> para efetuar testes de forma assíncrona e entre outras.</p>

![Screenshot](.github/screenshot.png)

#### Executando ⚙️

```sh
# Clone
$ git clone https://github.com/EricNeves/crudCLI.git

# Install Dependencies
$ cd crudCLI && npm install

# Help
$ npm start
# List all users
$ node src/index.js -A
# Create a new user
$ node src/index.js -C -N ericneves -E ericnevesr@gmail.com
# List user by ID
$ node src/index.js -L -I 123
# Edit user by ID
$ node src/index.js -U -I 123 -N eric -E eric@crud.com
# Delete user by ID
$ node src/index.js -R -I 123

```

#### Ferramentas 🛠

   * NodeJS
     * Path
     * FS (fs/promises)
     * CommanderJS
     * MochaJS

#### License

![Commit](https://img.shields.io/github/license/EricNeves/crudcli?color=success&logo=appveyor&logoColor=success&style=flat-square)