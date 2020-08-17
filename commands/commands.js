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

    .setColor(`#random`)

    //.addField("There is 21 commands you can use", `Write \`${crafty[message.guild.id].prefix}(name of the command)\`to use the commands\n\n`, false)

    //.addField("Commands :", `:grey_exclamation: HELP\n» If you need help to use this bot\n:grey_question: INFO\n» Information of the bot\n:desktop: CMDS\n» Avaible commands to use\n<:Youtube:588594913243955200> PLAY\n» Play your music with ${crafty[message.guild.id].prefix}play [URL/NAME]\n» Right now our bot is only can play from youtube\n:pause_button: PAUSE\n» You don't want to miss your favorite video / song?\n:stop_button: STOP\n» You don't want Zetsuya tired?\n:repeat: LOOP\n» You want to loop your Video/Songs?\n:speaker: VOLUME\n» Zetsuya is too noisy?\n:next_track: SKIP\n» You don't like it? SKIP IT\n:inbox_tray: INVITE\n» Take Zetsuya with you <3\n:satellite: PING\n» Check the speed that made Zetsuya and you meet`, `false`)

    .addField("General commands :", "`say  profile  help  info  cmds  ping  invite  Avatar  commands  donate  serverinfo`", false)

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

    .addField(
      "Music commands :",
      "`loop  nowplaying  pause  play  playlist  queue  remove  remove  search  skip  skipto  stats  stop  volume`"
    )

    .addField("Other commands will be added soon :ok_hand:", "_ _", "true") //ngapain? ~andra

    .setFooter(
      "©Release 2019 | bletik Bot | This bot is still under Development"
    )

    .setTimestamp();

  message.channel.send(embed);

  message.delete();
};
