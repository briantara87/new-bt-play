const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let inline = true;
  let resence = true;
  const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline"
  };

  const member =
    message.mentions.members.first() ||
    message.guild.members.get(args[0]) ||
    message.member;
  let target = message.mentions.users.first() || message.author;

  if (member.user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }

  let embed = new Discord.RichEmbed()
    //.setAuthor(member.user.username)
    .setAuthor(
      `BLETIK | BT`,
      `https://cdn.discordapp.com/avatars/478547279104442368/8d7f341ebda4498869591fbd95e3d807.png?size=256`
    )
    .setThumbnail(target.displayAvatarURL)
    .setColor(#6FA9FF)
    .addField("Username", `${member.user.username}`, inline)
    .addField("Discriminator", `${member.user.discriminator}`, inline)
    .addField("ID", member.user.id, inline)
    .addField("Bot", `${bot}`, inline, true)
    .addField("Status", `${status[member.user.presence.status]}`, inline, true)
    .addField("Acc Created at", member.user.createdAt.toLocaleString(), true)
    .addField(
      "Roles",
      `${member.roles
        .filter(r => r.id !== message.guild.id)
        .map(roles => `\`${roles.name}\``)
        .join(" **|** ") || "No Roles"}`,
      true
    )
    //    .setFooter("©Release 2019 | BLETIK Bot | This bot is still under Development")
    .setTimestamp();

  message.channel.send(embed);
};

module.exports.help = {
  name: "userinfo"
};
