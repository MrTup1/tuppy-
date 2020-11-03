const db = require (`quick.db`);
const ms = require(`parse-ms`);
const Discord = require('discord.js');

module.exports = {
    name: 'daily',
    description: "daily command",
    async execute (message, args){

        let user = message.author;
        let timeout = 86400000;
        let amount = 5000;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0 ) {
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)

        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            const embed = new Discord.MessageEmbed()
            .setTitle(`Here are your daily coins, ${user.username}`)
            .setDescription(`**${amount}** coins was placed in your wallet!`)
            .setColor("RANDOM")

            message.channel.send(embed);
        }
    }

    
}