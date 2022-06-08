const ds = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: "ping",
    execute(message, client) {
        
        message.reply({
            content: `**API Latency:** ${client.ws.ping} ms`
        })

    }
}