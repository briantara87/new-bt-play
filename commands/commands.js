const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;

  let donateEmb = new Discord.RichEmbed()

    .setColor("random")

    .addfield(
      "help,8ball,avatar,ban,cat,dog,calc,clear,cmds,donate,info,invite,kick,mute,ping,prefix,profile,report,say,unmute,warn"
    )
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
};
exports.conf = {
  
module.exports.
ommand"
}