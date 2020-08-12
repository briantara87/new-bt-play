cnst Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "478547279104442368") {
    let bletik = message.mentions.members.first();

    if (!bletik)
      return message.reply(":x: " + "| You need to mention a user/member!");

    
    if (!bletik) {
      bletik.addRole(bletik.id);

      message.channel.send(
        bletik + ` you have been given the permanent role: ` + bletik.name
      );
    } else {
    return message.reply(
      ":x: " + '| You need to have the "ADMINISTRATOR" Permission'
    );
  }
};

module.exports.help = {
  name: "addrole"
};
}