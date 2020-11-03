const db = require (`quick.db`);
const ms = require(`parse-ms`);
const Discord = require('discord.js');

module.exports = {
    name: 'payday',
    description: "payday command",
    async execute (message, args){

        let user = message.author;
        let timeout = 300000;
        let amount = 500;

        let paycheck = await db.fetch(`payday_${message.guild.id}_${user.id}`);

        if(paycheck !== null && timeout - (Date.now() - paycheck) > 0 ) {
            let time = ms(timeout - (Date.now() - paycheck));

            return message.channel.send(`Be patient employee, continue working, come back in ${time.minutes}m, and ${time.seconds}s`)

        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`payday_${message.guild.id}_${user.id}`, Date.now());

            const embed = new Discord.MessageEmbed()
            .setTitle(`Nice salary you got there, ${user.username}`)
            .setDescription(`**${amount}** coins was placed in your wallet!`)
            .setColor("RANDOM")
            
            message.channel.send(embed);
        }
    }

    
}