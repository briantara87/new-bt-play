const { RichEmbed, Client, uptime, client } = require("discord.js");

exports.run = (bot, message, args) => {
   let start = Date.now(); message.channel.send('_ _').then(message => { 
      message.delete(1);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
    .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
    .addField(`Version`, `0.0.1a`, true)
    .addField(`Node JS`, `9.x`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
                .addField(`Website`, `[hibikimoe.xyz](https://hibikimoe.xyz/)`, true)
                .addField(`Discord`, `[hibikimoe.xyz/discord](https://discord.gg/NNwzMm)`, true)
    .addField(`Developer`, `Zay#5616`, true)
    .setFooter("©Zetsuya Bot | Prefix: z! | This bot is still under Development")
    .setTimestamp()
    .setColor(`RANDOM`)
        message.channel.send(embed);
    });
}