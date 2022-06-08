/** Simple Community BOT | Created by L3gend | Version 1.0.0
 * 
 * Read the README file
*/
const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json')
const client = new Discord.Client(
    {intents: 131071}
);


client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
  const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
  for (const file of commandsFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
    console.log("✅ " + command.name)
  }
}

client.on("message", message => {
  const prefix = config.prefix;

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

  var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

  if (comando.Staff) {
    if (!message.member.roles.cache.get(config.staffRole)) {
      message.channel.send("You are not allowed to execute this command!")
      return
    }
  }


  comando.execute(message, client, args);
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction, client, config);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true
    });
  };
});


client.once('ready', () => {
    console.clear();
    console.log("ONLINE");
})


client.login(config.token)