const ds = require('discord.js');
const { execute } = require('./say');
const config = require('../../config.json');
module.exports = {
    name: "help",
    execute(interaction, client) {
        
        const helpEmb = new ds.MessageEmbed() 
            .setColor("BLUE")
            .setAuthor("Simple Community BOT", client.user.displayAvatarURL())
            .setDescription(`Hi <@${interaction.member.id}>, thanks for running the \`${config.prefix}help\` command, here is the list of all the commands inside the bot!`)
            .setTimestamp()

        interaction.reply({
            embeds: [helpEmb]
        })
    }
}