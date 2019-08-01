const { RichEmbed, Client, uptime, client } = require("discord.js");

exports.run = (bot, message, args) => {
        let embed = new RichEmbed()
    .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
    .setThumbnail(bot.user.avatarURL)
        .addField(`Invite me on your server :kissing_heart:`, `[Invite link](https://discordapp.com/api/oauth2/authorize?client_id=604652011857641484&permissions=8&scope=bot)`, true)
    .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(`#ecd4fc`)
        message.channel.send(embed);
}