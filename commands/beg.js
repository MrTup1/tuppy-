const db = require (`quick.db`);
const ms = require(`parse-ms`);

module.exports = {
    name: 'beg',
    description: "beg commmand",
    async execute (message, args){

        let user = message.author;
        let author = await db.fetch(`begged_${message.guild.id}_${user.id}`);
        let timeout = 20000

        if (author !== null && timeout - (Date.now() - author ) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Ayy you poor average joe, you can beg again in ${time.minutes}m and ${time.seconds}s`)
        }else {
            let amount = Math.floor(Math.random() * 250) + 1;
            if(amount == 69){
                let jackpot = 16969
                message.channel.send(`Successfully begged **${jackpot}** coins to your purse, nice bucks you got there`)
                db.add(`money_${message.guild.id}_${user.id}`, jackpot);
                db.set(`begged_${message.guild.id}_${user.id}`, Date.now());
            }else{
                message.channel.send(`Successfully begged **${amount}** coins to your purse, nice bucks you got there`)
                db.add(`money_${message.guild.id}_${user.id}`, amount);
                db.set(`begged_${message.guild.id}_${user.id}`, Date.now());
            }
        }
    }
}