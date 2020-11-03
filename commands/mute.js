const Discord = require('discord.js');
module.exports = {
    name: 'mute',
    description: "mutes person from server",
    async execute(message,args){
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t mute yourself!');

    
        message.guild.members.cache.get(member.id).roles.add(`745116515891937322`);

        message.guild.members.cache.get(member.id).roles.remove(`760091557520080906`);

        let reason = args.slice(1).join(" ");

        const muteembed = new Discord.MessageEmbed()
        .setTitle('Member Muted')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Muted', member)
        .addField('Muted by', message.author)
        .addField('Reason', reason)
        .setFooter('Time Muted', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(muteembed);
    }
}