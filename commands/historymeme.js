const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'historymeme',
    description: "pull historymeme from reddit",
    async execute(message,args){
           // you can put the subreddits you want to grab memes from
        const subReddits = ["historymemes"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}