const Djs = require("discord.js");

const { RichEmbed, Client } = require("discord.js");

const config = require("../config.json");

const fs = require("fs");

exports.run = (bot, message, args, client) => {
  let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if (!crafty[message.guild.id]) {
    crafty[message.guild.id] = {
      prefix: config.prefix
    };
  }

  let embed = new RichEmbed()

    .setAuthor(
      `Now Playing`,
      `https://cdn.discordapp.com/attachments/603134109371334666/611156158543036428/music-cd.png`
    )

    .setColor(`#ecd4fc`)

    .addField(
      "There is commands you can use",

      `Write \`${crafty[message.guild.id].prefix}(name of the command)\`to use the commands\n\n`,

      false
    )

    .setTimestamp();

  message.channel.send(embed);

  message.delete();
};
