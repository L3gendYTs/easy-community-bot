const ds = require('discord.js');
const moment = require('moment');
module.exports = {
    name: "userinfo",
    async execute(message, client) {

        var user = message.mentions.members?.last();

        if (!user) {
            try {
                user = await user.guild.members.fetch(args[0])
            } catch {
                user = message.member;
            }
        }

        let rolesName;
        let roles = user.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);

        rolesName = roles.join(" ")
        if (user.roles.cache.size < 1) rolesName = "No Roles"

        var embed = new ds.MessageEmbed()
            .setTitle("User Info")
            .setColor("BLUE")
            .setThumbnail(user.displayAvatarURL())
            .addField("User", "<@" + user.id + ">", true)
            .addField("ID", "```" + user.id + "```", true)
            .addField("Account Created", "```" + moment(user.user.createdAt).format("ddd DD MMM YYYY, HH:mm") + " (" + moment(user.user.createdAt).fromNow() + ")```", false)
            .addField("Joined this server", "```" + moment(user.joinedTimestamp).format("ddd DD MMM YYYY, HH:mm") + " (" + moment(user.joinedTimestamp).fromNow() + ")```", false)
            .addField("Roles", `${rolesName || `\`\`\`No Roles\`\`\``}`, false)
            .setFooter({
                text: "Simple Community BOT",
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp()

        message.delete()
        message.channel.send({
            embeds: [embed]
        })
    }
}