const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', `USER`]});
module.exports.client = client;
const ytdl = require('ytdl-core');
const fs = require('fs');
const config = require("./config.json");
const moment = require('moment');
const randomPuppy = require('random-puppy');
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const db = require('quick.db')
const ms= require('parse-ms')
const command = require (`./command`)
const Canvas = require('canvas');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('&help', { type: 'STREAMING', url: 'https://www.twitch.tv/dankmemerdiscord'})
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
  

var users = [];

client.on('ready', () =>
{
    let lastDay = 0;
    setInterval(()=>
    {
        for (let i = 0; i < users.length; i++){
            db.add(`lastbeg_${users[i]}`,1000);
        }

        if (lastDay != Date.day){
            for (let i = 0; i < users.length; i++){
                db.set(`isDaily_${users[i]}`,1);
            }
        }
        lastDay = Date.day;
    },1000);
});
client.on('message', message => {    
    if (message.content.includes("discord.gg/")) {
         const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("A Friendly Reminder ✅")
            .addField("\u200b", "✅ If Advertisement contains an expired invite, it will be deleted \n ✅ No viruses, malware, spyware or malicious link allowed \n ✅ Once you leave this Server, all your advertisements will be auto-deleted \n ✅ You can post 4 Advertisements every 24 hours \n ✅ Your Advertisement MUST contain a description")
        message.channel.send(embed).then(m => m.delete({timeout: 10000}));
    } else {

    }
});

client.on('message', message => {    ///Random message reacts
    const prefix = ""
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "david"){
        message.channel.send(`Too busy working in Dah Sing`)
    }
    if (cmd === "frank"){
        message.channel.send(`go away! *Tears Eden's spam emails. Autocognita is worth more than you!!!!!`)
    }
    if (cmd === "carrie lam"){
        message.channel.send(`下台`)
    }
    if (cmd === "carrie lam"){
        message.channel.send(`Joe Mama`)
    }
    if (cmd === "mark"){
        message.channel.send(`Convoy is reaching bankruptcy...`)
    }
    if (cmd === "susan"){
        message.channel.send(`how did you know my name?`)
    }
    if (cmd === "steven"){
        message.channel.send(`When i was your age, all i cared about was tennis and girls`)
    }
    if (cmd === "clown"){
        message.channel.send(`munching popcorn`)
    }
    if (cmd === "stephen"){
        message.channel.send(`Am i relevant?`)
    }
    if (cmd === "uwu"){
        message.channel.send(`CRINGE`)
    }
    if (cmd === "ernest"){
        message.channel.send(`abusing every power i have`)
    }
    if (cmd === "joe biden"){
        message.channel.send(`2020`)
    }
    if (cmd === "donald trump"){
        message.channel.send(`2020`)
    }
    if (cmd === "haha"){
        message.channel.send(`:)`)
    }
    if (cmd === "pls hunt"){
        message.channel.send(`get your rifle, shoot down the Nazis, and eat them alive! HAHAHA!`)
    }
});

client.on("message", message => {
    const prefix = "&";
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ask"){       
        client.commands.get(`ask`).execute(message, args)
    }
    if (cmd === "help"){
        client.commands.get(`help`).execute(message, args)
    }
    if (cmd === "userinfo"){
        client.commands.get(`userinfo`).execute(message, args)
    }
    if (cmd === 'roll'){
        client.commands.get(`roll`).execute(message, args)
    }
    if (cmd === `botinfo`){
        client.commands.get(`botinfo`).execute(message, args)
    }
});
client.on("message", async message => {
    const prefix = "&";
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();


    if (cmd === "meme"){
        client.commands.get(`meme`).execute(message, args)
    }
    if (cmd === "historymeme"){
        client.commands.get(`historymeme`).execute(message, args)
    }
    if (cmd === "science"){
        client.commands.get(`science`).execute(message, args)
    }
    if (cmd === "serverinfo"){
        client.commands.get(`serverinfo`).execute(message, args)
    }
    if (cmd === "ping") {
        client.commands.get(`ping`).execute(message, args)
    } 
    if (cmd === `verify`){
        client.commands.get(`verification`).execute(message, args)
    }
    if (cmd === `ban`){
        client.commands.get(`ban`).execute(message, args)
    }
    if (cmd === "kick") {
        client.commands.get(`kick`).execute(message, args)
    }
    if (cmd === "mute"){
        client.commands.get(`mute`).execute(message, args)
    }
    if (cmd === "unmute"){
        client.commands.get(`unmute`).execute(message, args)
    }
    if (cmd === "bal"){
        client.commands.get(`balance`).execute(message, args)
    }
    if (cmd === "daily"){
        client.commands.get(`daily`).execute(message, args)
    }
    if (cmd === "payday"){
        client.commands.get(`payday`).execute(message, args)
    }
    if (cmd === "beg"){
        client.commands.get(`beg`).execute(message, args)
    }
    if (cmd === "leaderboard") {
        client.commands.get(`leaderboard`).execute(message, args)
    }
    if (cmd === "historytrivia") {
        client.commands.get(`historytrivia`).execute(message, args)
    }
    if (cmd === "rules"){
        client.commands.get(`rules`).execute(message, args)
    }
    if (cmd === "newverification"){
        client.commands.get(`newverification`).execute(message, args)
    }
    if (cmd === "selfrolesping"){
        client.commands.get(`selfrolespings`).execute(message, args)
    }
    if (cmd === "gamingrole"){
        client.commands.get(`gamingrole`).execute(message, args)
    }
});

const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 70;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 10}px abril fatface`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return ctx.font;
};
client.on('guildMemberAdd', async member=> {
 
    const channel = member.guild.channels.cache.find (channel => channel.name === "👋│welcomes-and-goodbyes")
    if(!channel) return;

    const canvas = Canvas.createCanvas(728, 350);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./CleanWood.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#21258f';
	ctx.strokeRect(0, 0, 728, 409);

	// Slightly smaller text placed above the member's display name
	ctx.font = '45px abril fatface';
	ctx.fillStyle = '#21258f';
	ctx.fillText('Welcome to the server!', canvas.width / 3, canvas.height / 3);

    ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#000000';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 175, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 75, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    channel.send(`Welcome fellow citizen on Earth,${member} to **The Wholesome Gang**\nPlease Verify in <#760094204335620126> by reacting to the **green checkmark** ✅ in order to get full access to the server.`)

	channel.send(attachment);
});

client.on('guildMemberRemove', async member=> {
    const channel = member.guild.channels.cache.find (channel => channel.name === "👋│welcomes-and-goodbyes")
    if(!channel) return;

    const canvas = Canvas.createCanvas(728, 350);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wartorncity.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#e8ccc8';
	ctx.strokeRect(0, 0, 728, 409);

	// Slightly smaller text placed above the member's display name
	ctx.font = '45px abril fatface';
	ctx.fillStyle = '#bddffc';
	ctx.fillText('Why are you running?', canvas.width / 3, canvas.height / 3);

    ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ccd3ff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 175, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 75, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    channel.send(`"Say Goodbye" --- Rick Astley 2020`)

	channel.send(attachment);
});



client.on(`message`, async message => {
    const prefix = "&";
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();


    if (message.content.startsWith(`${prefix}reactionrole`)) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Among Us Role (Mic compulsory)`)
        .setDescription(`Please click the reaction below to access among us related channels`)
        .setColor("RED")

        message.channel.send(embed); // Let's see if it's working.
        
        embed.react(`🔪`).then(msg.react(``))
        embed.delete()
    }
})

client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `710755556314578966`) {
        if (reaction.emoji.id === "766663770231537695") await reaction.message.guild.members.cache.get(user.id).roles.add(`760811286991732776`)
    }
})

client.on(`messageReactionRemove`, async (reaction,user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return 

    if(reaction.message.channel.id === `710755556314578966`) {
        if (reaction.emoji.id === "766663770231537695") await reaction.message.guild.members.cache.get(user.id).roles.remove(`760811286991732776`)
    }
})

client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `760094204335620126`) {
        if (reaction.emoji.name === "✅") {
            await reaction.message.guild.members.cache.get(user.id).roles.add(`760091557520080906`)///reaction.message.guild.members.cache.console.log(get(user.id)).roles.add(`760091557520080906`)
        }
    }
})
///Annoucement
client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.name === "📌") {
            await reaction.message.guild.members.cache.get(user.id).roles.add(`767610636007505970`)
        }
        if (reaction.emoji.name === "🤝") await reaction.message.guild.members.cache.get(user.id).roles.add(`767610701429866506`)
        if (reaction.emoji.name === "❓") await reaction.message.guild.members.cache.get(user.id).roles.add(`767645993843556362`)
    }
})

client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.name === "📌") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(`767610636007505970`)
        }
        if (reaction.emoji.name === "🤝") await reaction.message.guild.members.cache.get(user.id).roles.remove(`767610701429866506`)
        if (reaction.emoji.name === "❓") await reaction.message.guild.members.cache.get(user.id).roles.remove(`767645993843556362`)
        
    }
})


///YT VID PING

client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767649334958489640") await reaction.message.guild.members.cache.get(user.id).roles.add(`767646949083971604`)
    }
})

client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767649334958489640") await reaction.message.guild.members.cache.get(user.id).roles.remove(`767646949083971604`)
    }
})

///Tuppy Bot 

client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767655885249839114") await reaction.message.guild.members.cache.get(user.id).roles.add(`767652371307954217`)
    }
})

client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767655885249839114") await reaction.message.guild.members.cache.get(user.id).roles.remove(`767652371307954217`)
    }
})

///Minecraft
client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767612345278922782") await reaction.message.guild.members.cache.get(user.id).roles.add(`767644968855797781`)
    }
})
///guild.members.fetch(user.id)
client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767612345278922782") await reaction.message.guild.members.cache.get(user.id).roles.remove(`767644968855797781`)
    }
})
//CS GO
client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767644441891831869") await reaction.message.guild.members.cache.get(user.id).roles.add(`767645063835942942`)
    }
})

client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767644441891831869") await reaction.message.guild.members.cache.get(user.id).roles.remove(`767645063835942942`)
    }
})

//CitiesWar

client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767662537180184586") await reaction.message.guild.members.cache.get(user.id).roles.add(`741215563401003069`)
    }
})

client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `767023262064443443`) {
        if (reaction.emoji.id === "767662537180184586") await reaction.message.guild.members.cache.get(user.id).roles.remove(`7412155634010030692`)
    }
})

client.on(`messageReactionAdd`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `752272556358369411`) {
        if (reaction.emoji.name === "🦅") await reaction.message.guild.members.cache.get(user.id).roles.add(`752271949283196968`)
        if (reaction.emoji.name === "🐉") await reaction.message.guild.members.cache.get(user.id).roles.add(`752271391390302298`)
        if (reaction.emoji.name === "🦑") await reaction.message.guild.members.cache.get(user.id).roles.add(`752272134000082974`)
    }
})

client.on(`messageReactionRemove`, async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.partial) await reaction.fetch()
    if (user.bot) return

    if(reaction.message.channel.id === `752272556358369411`) {
        if (reaction.emoji.name === "🦅") await reaction.message.guild.members.cache.get(user.id).roles.remove(`752271949283196968`)
        if (reaction.emoji.name === "🐉") await reaction.message.guild.members.cache.get(user.id).roles.remove(`752271391390302298`)
        if (reaction.emoji.name === "🦑") await reaction.message.guild.members.cache.get(user.id).roles.remove(`752272134000082974`)
    }
})




client.login(process.env.token);