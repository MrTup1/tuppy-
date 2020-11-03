const Discord = require('discord.js');
module.exports = {
    name: 'selfrolespings',
    description: "self role ping roles",
    async execute (message, args){

        const embed = new Discord.MessageEmbed()
        .setAuthor("Ping Roles 📌")
        .setColor("RED")
        .addField("React in the bottom for the respective roles:", "Annoucement Ping: 📌 \n Partnership Ping: 🤝 \n Question of the day Ping: ❓\n MrTup Youtube Upload Ping: <:yt:767649334958489640> \n Tuppy bot updates: <:tuppy:767655885249839114>")


        message.channel.send(embed);
    }

    
}