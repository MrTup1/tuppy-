module.exports = {
    name: 'ask',
    description: "ask",
    execute(message,args){
        ballMessage = message.content.slice (5);
        number = 5;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random){
            case 1: message.channel.send('YEA BOIIIIIIIIII'); break;
            case 2: message.channel.send('Sadly, no'); break;
            case 3: message.channel.send('Maybe --- gei ger 2020'); break;
            case 4: message.channel.send('Probably --- Stalin 2020'); break;
            case 5: message.channel.send('impossible --- pessimistic duck 2020'); break;
        }
    }
}