const Commando = require('discord.js-commando');
const Discord  = require('discord.js');


module.exports = class EmbedCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: 'help',
            group: 'helperbot',
            memberName: 'help',
            description: 'Helper bot commands',
        });    
    }

    run(msg) {
        const embed = new Discord.MessageEmbed()
            .setColor('#e91e63')
            .setTitle('Commands list | คำสั่งบอท')
            .setDescription('Use this command to run action!')
           
            .setThumbnail('https://cdn.discordapp.com/app-icons/810071854994817044/879cdb32655f43a334d6c6920a541392.png')
            .addFields(
                { name: '!nahee', value: 'เสียงลุงโทนี่' },
                { name: '!nacom', value: 'เสียงน้าค่อม' },
                { name: '!dang', value: 'เสียงอาจารย์แดง' },
                { name: '!hee', value: 'เสียงศาสดา ชมรมคนชอบ _ี' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Special Thank bot profile picture', value: 'รัชกฤช โมจมสิน' },
               
            )

            
            .setTimestamp()
            .setFooter('Contribute @ Github : https://github.com/Kampanart48505/Double-Shit-Discord-Bot-2021');
    
        return msg.embed(embed);
    }
};