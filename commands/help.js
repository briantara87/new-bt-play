const Djs = require("discord.js");
const fs = require("fs");
const { RichEmbed, Client, args, msg } = require("discord.js");

//
exports.run = async (bot, message, args, client, msg) => {
                  let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  crafty[message.guild.id] = {
    prefix: args[0]
  }
    fs.writeFile("./prefixes.json", JSON.stringify(crafty), (err) => {
     if(err) console.log(err);
  })
  let embed = new RichEmbed()
        .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
        .setColor(`#ecd4fc`)
        .setThumbnail(bot.user.avatarURL)
        .addField("If you have a question / bug report please report them on", "[Discord](https://discord.gg/Xdcbk2X)\n_ _",`false`)
        .addField("Are you don't know this bot commands? type:",`[${args[0]}cmds](https://-) Global prefix is z!\n_ _`,"false") 
        .addField("Documentation can be found at","[Github](https://github.com/Zay-Development/Zetsuya-Bot/tree/master)\n_ _", "false")
        .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
        .setTimestamp()
        message.channel.send(embed);
}
exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['h']
}

exports.help = {
  name: "Help"
}