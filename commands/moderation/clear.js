const config = require("../../config.json")
module.exports = {
    name: "clear",
    async execute(message) {
        try {
            count = parseInt(message.content.split(/\s+/)[1]) + 1;
        } catch {
            return message.channel.send(`Usage: ${config.prefix}clear [number]`)
        }

        if (!count || count < 1) {
            return message.channel.send(`Usage: ${config.prefix}clear [number]`)
        }

        if (count < 100) {
            await message.channel.bulkDelete(count, true)
        }
        else {
            await message.channel.bulkDelete(100, true)
            count = 100
        }
    },
};
