module.exports.run = async (bot, message, args) => {
  if (!message.member.author.id("478547279104442368"))
    return message.channel.sendMessage(
      "You don't have the `bletik` premission"
    );

  let toMute =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);

  if (!toMute)
    return message.channel.sendMessage("Please mention an user or ID to mute!");

  let role = message.guild.roles.find(r => r.name === "prey");

  if (!role || !toMute.roles.has(role.id))
    return message.channel.sendMessage("This user is not muted!");

  await toMute.removeRole(role);

  message.channel.sendMessage("The user has been unmuted!");

  message.delete();
};

module.exports.help = {
  name: "devunmute"
};
