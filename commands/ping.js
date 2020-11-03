const index = require(`./../index.js`);

module.exports = {
    name: 'ping',
    description: "Says ping!",
    async execute (message, args) {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(index.client.ws.ping)}ms`);
    }
}