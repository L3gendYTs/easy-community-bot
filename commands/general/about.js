const ds = require('discord.js');
const moment = require('moment');
const config = require('../../config.json')
module.exports = {
    name: "about",
    execute(message, client) {
        

        var embed = new ds.MessageEmbed()
            .setTitle("Simple Community BOT || ABOUT")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`Hi <@${message.author.id}>, I am a bot created to be used on small communities, my creator is <@550373156120952852>, if you want to download the bot go to` + ` [Hydra Studios](https://discord.gg/NsfsBxVNrv) ` + `and download it.`)
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