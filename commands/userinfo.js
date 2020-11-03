const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'userinfo',
    description: "user info",
    execute(message,args){
        let user = message.mentions.users.first() || message.author;

        if (user.presence.status === "dnd") user.presence.status = "Do Not Disturb";
        if (user.presence.status === "Idle") user.presence.status = "Idle";
        if (user.presence.status === "Offline") user.presence.status = "Offline";
        if (user.presence.status === "Online") user.presence.status = "Online";
        
        function game() {
        let game;
        if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
        else if (user.presence.activities.length < 1) game = "None"; // This will check if the user doesn't playing anything.
        return game; // Return the result.
        }
        
        let x = Date.now() - user.createdAt; // Since the user created their account.
        let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
        let created = Math.floor(x / 86400000); // 5 digits-zero.
        let joined = Math.floor(y / 86400000);
        
        const member = message.guild.member(user);
        let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None"; // Nickname
        let createdate = moment.utc(user.createdAt).format("MMMM Do YYYY, HH:mm"); 
        let joindate = moment.utc(member.joinedAt).format("MMMM Do YYYY, HH:mm"); // User Joined the Server Date
        let status = user.presence.status; // DND, IDLE, OFFLINE, ONLINE
        let avatar = user.avatarURL({size: 2048}); // Use 2048 for high quality avatar.
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(user.tag, avatar)
        .setThumbnail(avatar)
        .setTimestamp()
        .setColor("RED")
        .addField("ID", user.id, true)
        .addField("Nickname", nickname, true)
        .addField("Registered at:", `${createdate} \nRegistered ${created} day(s) ago`, true)
        .addField("Joined Server at:", `${joindate} \nJoined ${joined} day(s) ago`, true)
        .addField("Status", status, true)
        .addField("Game", game(), true)
        
        message.channel.send(embed); // Let's see if it's working.
    }
}
