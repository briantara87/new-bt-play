const { RichEmbed, Client, uptime, client } = require("discord.js");

exports.run = (bot, message, args) => {
        let embed = new RichEmbed()
        .addTitle(`Welcome To Our Server !`)
        .addField(`Invite me on your server :kissing_heart:`, `[Invite link](https://discordapp.com/api/oauth2/authorize?client_id=604652011857641484&permissions=8&scope=bot)`, true)
    .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(`#ecd4fc`)
        message.channel.send(embed);
}
exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['wm']
}