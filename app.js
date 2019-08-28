const chalk = require('chalk')
const yargs = require ('yargs')
const login = require('./login.js')
const getData = require('./get-data.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Register new user',
    builder: {
        username: {
            describe: 'User username',
            demandOption: true,
            type: 'string'
        },

        password: {
            describe: 'User password',
            demandOption: true,
            type: 'string'
        },

        email: {
            describe: 'User email',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       login.addUser(argv.username, argv.password, argv.email)
    }
})

// Create get command
yargs.command({
    command: 'get',
    describe: 'Get crypto data',
    handler(){
        getData.getData()
    }
})

// Create login command
yargs.command({
    command: 'login',
    describe: 'Login',
    builder: {
        username: {
            describe: 'User username',
            demandOption: true,
            type: 'string'
        },

        password: {
            describe: 'User password',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        login.loginUser(argv.username, argv.password)
    }
})

yargs.parse()