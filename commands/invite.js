const { RichEmbed, Client, uptime, client } = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new RichEmbed()
    .setAuthor(
      `BLETIK | BT`,
      `https://cdn.discordapp.com/avatars/478547279104442368/8d7f341ebda4498869591fbd95e3d807.png?size=256`
    )
    .setThumbnail(bot.user.avatarURL)
    .addField(
      `Invite me on your server ::`,
      `[Invite link](https://discordapp.com/api/oauth2/authorize?client_id=736930869184299070&permissions=524152263&scope=bot)`,
      true
    )
    .setFooter(
      "©Release 2019 | bletik Bot | This bot is still under Development"
    )
    .setTimestamp()
    .setColor(`#ecd4fc`);
  message.channel.send(embed);
};
