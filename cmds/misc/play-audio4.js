const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hee',
            group: 'misc',
            memberName: 'hee',
            description: 'Play some audio',
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {
            const sound = connection.play(path.join(__dirname, 'heejarn.m4a'));
            sound.on('finish', () => {
                connection.disconnect();
            });
        });

        
        

        
     
    }

    

}