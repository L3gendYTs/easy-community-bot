const ds = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: "kick",
    Staff: true,
    execute(message, client) {

        var user = message.mentions.members?.first()
        var messagee = message.content.slice(28).trim();
        let channelMod = message.guild.channels.cache.get(config.moderationAlertChannel);

        if (!user) {
            message.delete()
            message.channel.send("I need to enter a user!")
            return;
        }

        if (user.id === message.author.id) {
            message.delete()
            message.channel.send("You cannot kick yourself!")
            return;
        }

        if (!messagee) {
            message.delete()
            message.channel.send("You must enter the reason for the kick!")
            return;
        }

        if(!user.kickable) {
            message.channel.send("This member is not kickable!")
            return;
        }

        const kick = new ds.MessageEmbed()
            .setColor("RED")
            .setAuthor("KICK", client.user.displayAvatarURL())
            .addField("Author:", `<@${message.author.id}>`)
            .addField("User:", `<@${user.id}>`)
            .addField("Reason:", `${messagee}`)
            .setFooter({
                text: "Simple Community BOT",
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp()
        message.delete()
        channelMod.send({
            embeds: [kick]
        })
        
        const kicked = new ds.MessageEmbed()
            .setColor("RED")
            .setAuthor("You have been kicked!")
            .addField("Author:", `<@${message.author.id}>`)
            .addField("Reason:", `${messagee}`)
            .setFooter({
                text: "Simple Community BOT",
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp()
        user.send({
            embeds: [kicked]
        })
        user.kick();
    }
}