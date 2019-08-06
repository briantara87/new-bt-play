const { RichEmbed, Client, uptime, client } = require("discord.js");

client.on (`message`, () => {
        mmsg.channel.send(`Prefix has been set to ${args[0]}`);