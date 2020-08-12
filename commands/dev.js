const Discord = require("discord.js");

const bot = new Discord.Client();

exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()

    .setTitle("developer")

    .setDescription(

      "Sorry, the `dev` command can only be executed by the Developer."

    )

    .setColor("BLUE");

  if (message.author.id !== "478547279104442368")

    return message.channel.send(embed);

  function clean(text) {

    if (typeof text === "string")

