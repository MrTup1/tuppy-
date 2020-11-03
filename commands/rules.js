const Discord = require('discord.js');
module.exports = {
    name: 'rules',
    description: "rules about server",
    async execute (message, args){

        const embed = new Discord.MessageEmbed()
        .setAuthor("Rules 📜")
        .setColor("BLUE")
        .addField("`1.` Do not be toxic anywhere in the server, since our goal is to have a chill-welcoming community, we ask you to respect other members and be chill.","‎‎‎‏‏‎ ‎")
        .addField("`2.` Use of profane words or slurs are permitted but dont overuse them.", "‎‎‎‏‏‎ ‎ ")
        .addField("`3.` Please read Discord TOS and Guidelines before accessing the server. Kindly follow the rules or be cautious if you didn't read them. \n- TOS: https://discordapp.com/terms\n- TOS: https://discordapp.com/terms", "‎‎‎‏‏‎ ‎")
        .addField("`4.` Advertising inside the server is strictly prohibited, DM advertising will lead you to a worse punishment.", "‎‎‎‏‏‎ ‎ ")
        .addField("`5.` This server is a SFW server so talking or posting contents that is related to NSFW will leads you to a different punishments, we could potentially ban you depends on the content you posted.", "‎‎‎‏‏‎ ‎ ")
        .addField("`6.` Some channels here are self-explanatory so please keep it on topic.", "‎‎‎‏‏‎ ‎ ")
        .addField("`7.` Personal informations is strictly prohibited anywhere inside the server.", "‎‎‎‏‏‎ ‎ ")
        .addField("`9.` Don't spam on the text channels, other than #s-p-a-m", "‎‎‎‏‏‎ ‎ ")
        .addField("`10.` Don't argue with staffs especially when you're arguing with them because you got punished.", "‎‎‎‏‏‎ ‎ ")
        .addField("`11.` Do not annoy people on VCs, this includes changing the playing song by Rythm bot and earraping.", "‎‎‎‏‏‎ ‎ ")
        .addField("`12.` No raiding nor planning to raid another server.", "‎‎‎‏‏‎ ‎ ")
        .addField("`13.` No raiding nor planning to raid another server.", "‎‎‎‏‏‎ ‎ ")
        .addField("`14.` Don't be like Cutty312", "‎‎‎‏‏‎ ‎ ")
        .addField("`15.` Personal informations is strictly prohibited anywhere inside the server.", "‎‎‎‏‏‎ ‎ ")


        message.channel.send(embed);
    }

    
}