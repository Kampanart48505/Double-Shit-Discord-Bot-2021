
const path = require('path')
const Commando  = require('discord.js-commando')

const config = require('./config.json')
const command = require('./command')

const client = new Commando.CommandoClient({
    owner: '706878302177984593',
    commandPrefix: config.prefix

});

client.on('ready', async () =>{
    console.log("The server is ready to use !")
    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ['misc', 'misc command group'],
            ['helperbot', 'helper bot command group'],
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            help: false,
        })
        .registerCommandsIn(path.join(__dirname, 'cmds'))
        
});

client.login(config.token)