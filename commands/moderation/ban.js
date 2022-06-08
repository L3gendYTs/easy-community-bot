const ds = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: "ban",
    Staff: true,
    execute(message, client) {

        var user = message.mentions.members?.first()
        var messagee = message.content.slice(27).trim();
        let channelMod = message.guild.channels.cache.get(config.moderationAlertChannel);

        if (!user) {
            message.delete()
            message.channel.send("I need to enter a user!")
            return;
        }

        if (user.id === message.author.id) {
            message.delete()
            message.channel.send("You cannot ban yourself!")
            return;
        }

        if (!messagee) {
            message.delete()
            message.channel.send("You must enter the reason for the ban!")
            return;
        }

        if(!user.bannable) {
            message.channel.send("This member is not bannable!")
            return;
        }

        const kick = new ds.MessageEmbed()
            .setColor("RED")
            .setAuthor("BAN", client.user.displayAvatarURL())
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
            .setAuthor("You have been banned!")
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
        user.ban();
    }
}