const User = require('./entities/User')
const id   = require('./utils/generateID')
const path = require('path')

const { program } = require('commander')

const user = new User({
    file: path.resolve(__dirname, 'database/db.json')
})

program
    .version('v1')
    .description(
    "Author: \x1b[44m Eric Neves \x1b[0m \n"+
    "Github: \x1b[44m github.com/ericneves \x1b[0m \n\n"+
    
    "\x1b[33m[+] Create: \x1b[0m \x1b[32m     node src/index.js -C -N Eric -E ericnevesr@gmail.com \x1b[0m \n"+
    "\x1b[33m[+] List all: \x1b[0m \x1b[32m   node src/index.js -A \x1b[0m \n"+
    "\x1b[33m[+] List by ID: \x1b[0m \x1b[32m node src/index.js -L -I 123 \x1b[0m \n"+
    "\x1b[33m[+] Edit: \x1b[0m \x1b[32m       node src/index.js -U -I 123 -N ericnevesr -E ericnevesr@gmail.com \x1b[0m \n"+
    "\x1b[33m[+] Remove: \x1b[0m \x1b[32m     node src/index.js -R -I 123\x1b[0m"
    )
    
    // List all users
    .option('-A, --all', 'list all users\n\n')

    // Create a new user
    .option('-C, --create', 'create a new user')
    .option('-N, --name <name>', 'enter the name of user')
    .option('-E, --email <email>', 'enter the email of user\n\n')

    // List user by ID
    .option('-L, --list', 'list user by ID')
    .option('-I, --id <ID>', 'enter the id of user\n\n')

    // Edit user by ID
    .option('-U, --update', 'edit user by ID')
    .option('-I, --id <ID>', 'enter the id of user')
    .option('-N, --name <name>', 'enter the name of user')
    .option('-E, --email <email>', 'enter the email of user\n\n')

    // Remove user by ID
    .option('-R, --remove', 'remove user by ID')
    .option('-I, --id <ID>', 'enter the id of user\n\n')

    .parse()

const opts = program.opts()

// List all users
if (opts.all) {
    user.all().then(console.log)
}
// Create a new users
else if (opts.create) {
    const { name, email } = opts
    const data = {
        id: id(),
        username: name,
        email
    }

    user.create(data).then(console.log)
}
// List user by ID
else if (opts.list) {
    user.findByID(parseInt(opts.id)).then(console.log)
}
// Edit user by ID
else if (opts.update) { 
    const { id, name, email } = opts
    const data = {
        username: name,
        email
    }
    user.edit(parseInt(id), data).then(console.log)
}
// Remove user by ID
else if (opts.remove) {
    user.remove(parseInt(opts.id)).then(console.log)
}