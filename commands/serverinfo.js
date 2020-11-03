const Discord = require('discord.js');
module.exports = {
    name: 'serverinfo',
    description: "serverinfo about server",
    async execute(message,args){
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };       
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russia",
            "southafrica": ":flag_za:  South Africa"
        };
        let icon = message.guild.iconURL({size:2048});
        
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor("DARK_BLUE")
            .addField("Name", message.guild.name, true)
            .addField("ID", message.guild.id, true)
            .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
            .addField("Region", region[message.guild.region], true)
            .addField("Total", `${message.guild.members.cache.size}`, true)
            .addField("Humans", `${message.guild.members.cache.filter(member => !member.user.bot).size} `, true)
            .addField("Bots", `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .addField("Channels", message.guild.channels.cache.size, true)
            .addField("Roles", message.guild.roles.cache.size, true)
            .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
            .setThumbnail(icon);
        message.channel.send({embed});   
    }
}

