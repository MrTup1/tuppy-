const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "tuppy guide",
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor("The Very Useful Tuppy Guide")
        .addField("Syntax:", "`&`")
        .addField("Data:", "`serverinfo`  `userinfo`  `botinfo`")
        .addField("Economy:", "`bal` `beg` `payday` `daily` `leaderboard` `historytrivia`")
        .addField("Reddit:", "`meme`  `historymeme`  `science`" )
        .addField("Fun:", "`ask`  `roll`  `ping`")
        .addField("Admin:", "`ban`  `kick`  `mute`  `unmute` **e.g. &ban <person> <reason>**")
        message.channel.send(embed);
    }
}