const Discord = require('discord.js');
module.exports = {
    name: 'newverification',
    description: "verify by clicking reaction",
    async execute (message, args){

        const embed = new Discord.MessageEmbed()
        .setAuthor("Verification ✅")
        .setColor("BLUE")
        .setTitle("By reacting to this message, you are agreeing to comply with all the rules in #rules ")
        .setDescription("We reserve the right to kick or ban you if you do not comply, now have fun!")


        message.channel.send(embed);
    }

    
}