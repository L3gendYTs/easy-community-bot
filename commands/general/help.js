const ds = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: "help",
    execute(interaction, client) {
        
        const helpEmb = new ds.MessageEmbed() 
            .setColor("BLUE")
            .setAuthor("Simple Community BOT", client.user.displayAvatarURL())
            .setDescription(`Hi <@${interaction.member.id}>, thanks for running the \`${config.prefix}help\` command, here is the list of all the commands inside the bot!`)
            .addField(`\`${config.prefix}userinfo [user]\``, "To view a user's profile information.")
            .addField(`\`${config.prefix}serverinfo\``, "To view the server profile information.")
            .addField(`\`${config.prefix}ping\``, "To see the ping of the bot.")
            .addField(`\`${config.prefix}say [message]\``, `To send a message with the bot. (Executable only from role <@&${config.staffRole}>)`)
            .addField(`\`${config.prefix}moderation\``, "To view all available moderation commands.")
            .addField(`\`${config.prefix}about\``, "To view more information about the bot.")
            .setTimestamp()

        interaction.reply({
            embeds: [helpEmb]
        })

    }
}