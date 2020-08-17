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
    .addField(
      "General commands :",

      "`say  profile  help  info  cmds  ping  invite  avatar commands  donate  serverinfo`",

      false
    )

    .addField(
      "Fun commands :",

      "`8ball  age  advice  roast  cat  dog  roll  calc  achievement  fish  poll`",

      false
    )

    .addField(
      "Moderation commands :",

      "`clear  prefix  mute  unmute  kick  warn  botnick`",

      false
    )
    .addfield(
      "music commands",
      "`loop  nowplaying  pause  play  playlist  queue  remove  remove  search  skip  skipto  stats  stop  volume`",

      false
    )

    .addField("Other commands will be added soon:ok_hand:")

    .setFooter(
      "©Release 2019 | bletik Bot | This bot is still under Development"
    )

    .setTimestamp();

  message.channel.send(embed);

  message.delete();
};
