const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;

  let donateEmb = new Discord.RichEmbed()

    .setColor("random")

    .setTitle("Donate")

    .setDescription("Donate for the bot trough this links!")

    .addField(
      "trakteer Donate",
      "[trakteer](https://trakteer.id/bletik-bt-u8iyu)"
    )

    .setFooter("Donation links for the bot!")

    .setThumbnail(bicon);

  message.channel.send(donateEmb);

  message.delete();
};

module.exports.help = {
  name: "donate"
};
