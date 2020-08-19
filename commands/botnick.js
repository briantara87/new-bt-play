const Discord = require("discord.js");

const bot = new Discord.Client();

exports.run = (client, message, args) => {
  if (
    !message.member.hasPermission("MANAGE_NICKNAMES") &&
    message.author.id !== "478547279104442368"
  )
    return message.reply(
      "You do not have permission to change the bot's nickname"
    );
  else {
    let username = args.join(" ");

    if (username.length < 1)
      return message.reply("You must supply a name for the client.");

    message.guild.members.get("736930869184299070").setNickname(username);

    const embed = new Discord.RichEmbed()

      .setColor(0x00a2e8)

      .addField(
        "Bot username set successfully!",
        username + " is now the nickname for the bot :white_check_mark:"
      );

    message.reply({ embed });
    message.delete();
  }
};
