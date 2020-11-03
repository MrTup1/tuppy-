const Discord = require('discord.js');
module.exports = {
    name: 'gamingrole',
    description: "gaming role",
    async execute (message, args){

        const embed = new Discord.MessageEmbed()
        .setAuthor("Gaming Roles 🎮")
        .setColor("RED")
        .addField("React in the bottom for the respective roles:", "Minecraft Role: <:minecraft:767612345278922782> \n CS GO Role: <:ak47:767644441891831869> \n Cities War Role: <:gps:767662537180184586>")


        message.channel.send(embed);
    }

    
}