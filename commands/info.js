const { RichEmbed, Client } = require("discord.js");

exports.run = (bot, message, args, client) => {
        let embed = new RichEmbed()
        .setTitle(`:gear: Bot Info`)
        .setColor(`RANDOM`)
        .addField(`Version`, `0.0.1a`, `true`)
        .addField(`Node JS`, `9.x`, `true`)
        .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, `true`)
        .addField(`Servers`, `${client.guilds.size}`, `true`)
        .addField(`Users`, `${client.users.size}`, `true`)
        .addField(`Developer`, `Zay#5616`, `true`)
        message.channel.send(embed);
}
