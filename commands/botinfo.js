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
      `bt bot`,

      `https://cdn.discordapp.com/attachments/711923492508926006/735016654852849775/artflow_202007211310.png`
    )

    .addField(
      `${client.users.size} Users`,
      )
    .addfield(
      `${client.channels.size} Channels`,
      `false`
      
      `${client.guilds.size} Server`
      `false`
    )
    .setFooter(
      "©Release 2019 | bletik Bot | This bot is still under Development"
    )

    .setTimestamp();

  message.channel.send(embed);

  message.delete();
};
