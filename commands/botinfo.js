const Discord = require('discord.js');
const {version} = require(`./../package.json`)
const { MessageEmbed, version: djsversion } = require('discord.js');
const db = require('quick.db')
const ms= require('parse-ms')
const os = require(`os`)
const {utc} = require('moment');
const index = require(`./../index.js`)

module.exports = {
    name: 'botinfo',
    description: "botinfo",
    execute(message,args){
        const user = index.client.user
        const core = os.cpus()[0]

        let happyclient = user.tag
        let avatar = user.avatarURL({size: 2048});

        const embed = new Discord.MessageEmbed()
            .setThumbnail(avatar)
            .setColor(`DARK_BLUE`)
            .addField(`General`, [
                `** Client:** ${happyclient} (${user.id})`,
                //`**> Commands:** ${this.client.commands.size}`,
                `** Servers:** ${index.client.guilds.cache.size.toLocaleString()}`,
                `** Users:** ${index.client.guilds.cache.reduce((a,b) => a + b.memberCount, 0).toLocaleString()} `,
                `**Channels:** ${index.client.channels.cache.size.toLocaleString()}`,
                `** Creation Date:** ${utc(index.client.user.createdTimestamp).format(`Do MMMM YYYY`)}`,
                `** Node.js:** ${process.version}`,
                `** Version:** v${version} `,
                `** Discord.js:** v${djsversion} `,
                `\u200b`
                
            ])
        message.channel.send(embed);
    }
}