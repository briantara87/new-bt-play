const Discord = require("discord.js");

.setColor(`random`)

    .setThumbnail(client.user.avatarURL)

module.exports.run = async (bot, message, args) => {
  message.channel.send(
    "help,8ball,avatar,ban,cat,dog,calc,clear,cmds,donate,info,invite,kick,mute,ping,prefix,profile,report,say,unmute,warn"
  );

 message.delete();
};

module.exports.help = {
  name: "command"
};
