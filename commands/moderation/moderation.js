const ds = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: "moderation",
    execute(interaction, client) {
        
        const helpEmb = new ds.MessageEmbed() 
            .setColor("BLUE")
            .setAuthor("Simple Community BOT", client.user.displayAvatarURL())
            .setDescription(`Hi <@${interaction.member.id}>, thanks for running the \`${config.prefix}moderation\` command, here is the list of all moderation commands.!`)
            .addField(`\`${config.prefix}ban [user] [reason]\``, "To view a user's profile information.")
            .addField(`\`${config.prefix}kick [user] [reason]\``, "To kick a user from the server.")
            .addField(`\`${config.prefix}warn [user] [reason]\``, "To warn a user.")
            .addField(`\`${config.prefix}clear [number]\``, "To delete messages!")
            .setTimestamp()

        interaction.reply({
            embeds: [helpEmb]
        })

    }
}