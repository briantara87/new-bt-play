const Djs = require("discord.js");
const { RichEmbed, Client } = require("discord.js");

exports.run = (bot, message, args, client) => {
        let embed = new RichEmbed()
        .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
    .setcolor(`RANDOM`)
    .addField(`Version`, `0.0.1a`, true)
    .addField(`Node JS`, `9.x`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Servers`, `${client.guilds.size}`, true)
    .addField(`Users`, `${client.users.size}`, true)
    .addField(`Developer`, `Zay#5616`, true)
    .setFooter("©Zetsuya Bot | Prefix: z! | This bot is still under Development")
    .setTimestamp()
        message.channel.send(embed);
}
exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['i']
}

exports.info = {
  name: "Info"
}