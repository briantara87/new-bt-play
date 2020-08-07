const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;

  let donateEmb = new Discord.RichEmbed()

    .setColor("random")
  
.addField(
  "use" ("./prefixes.json", "``[command] to use``"),
  "for example" ("./prefixes.json", "``help``"
  )
    .setTitle("server and core")

    .setDescription("help,invite,ping")

    .addField(

      "trakteer Donate",

      "[trakteer](https://trakteer.id/bletik-bt-u8iyu)"

    )

    .setFooter("not yeet all commands!")

    .setThumbnail(bicon)
  message.channel.send(Emb);

  message.delete();

};

module.exports.help = {

  name: "commands"

};

