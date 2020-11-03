module.exports = {
    name: 'roll',
    description: "rolls number",
    async execute(message,args){
        ballMessage = message.content.slice (6);
        number = 99;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if(random == 69){
            message.channel.send("<@" + message.author.id + ">," + ':game_die:' + " CONGRAGULATIONS! YOU ROLLED A 69!!!!  ͡° ͜ʖ ͡°)" + ':game_die:');
        } else{
            message.channel.send("<@" + message.author.id + ">,:game_die: you rolled a "+ random + ":game_die:");
        }
    }
}