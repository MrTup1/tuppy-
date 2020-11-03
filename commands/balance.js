const Discord = require('discord.js');
const db = require(`quick.db`);

module.exports = {
    name: 'balance',
    description: "gives balance of user",
    async execute (message, args){

        let user = message.mentions.users.first() || message.author;

        let avatar = user.avatarURL({size: 2048});

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);

        if(bal === null) bal = 0;

        const embed = new Discord.MessageEmbed()
        .setTitle(`Balance`)
        .setThumbnail(avatar)
        .setDescription(user.username)
        .addField("Balance:", bal)
        .setColor("GREEN")
        message.channel.send(embed);
    }

    
}