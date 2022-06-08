const ds = require('discord.js');
const moment = require('moment');
const config = require('../../config.json')
module.exports = {
    name: "serverinfo",
    execute(message, client) {
        var server = client.guilds.cache.get(config.guild);
        var categoryCount = server.channels.cache.filter(c => c.type == "GUILD_CATEGORY").size;
        var textCount = server.channels.cache.filter(c => c.type == "GUILD_TEXT").size;
        var vocalCount = server.channels.cache.filter(c => c.type == "GUILD_VOICE").size;

        var embed = new ds.MessageEmbed()
            .setTitle(server.name)
            .setDescription("All information on this server!")
            .setThumbnail(server.iconURL({ dynamic: true }))
            .addField("Server ID", "```" + server.id + "```", true)
            .addField("Boost level", "```Level " + server.premiumTier + " (" + server.premiumSubscriptionCount + " boost)```", true)
            .addField("Members", "```Total: " + server.memberCount + "```", false)
            .addField("Server categories and channels", "```Category: " + categoryCount + " | Text: " + textCount + " | Voice: " + vocalCount + "```", false)
            .addField("Server created", "```" + moment(server.createdAt).format("ddd DD MMM YYYY, HH:mm") + " (" + moment(server.createdAt).fromNow() + ")```", false)

        message.delete()
        message.channel.send({
            embeds: [embed]
        })
    }
}