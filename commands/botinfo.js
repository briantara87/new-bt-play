const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let inline = true

    let bicon = bot.user.displayAvatarURL;

    let usersize = bot.users.size

    let chansize = bot.channels.size

    let uptimxd = bot.uptime 

    let servsize = bot.guilds.size

    let botembed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .setThumbnail(bicon)

    .addField("Bot Name", `<:robot:736930869184299070> ${bot.user.username}`, inline)

    .addField("Bot Owner", "<:bletik:723500011547131975> <@478547279104442368>", inline )

    .addField("Servers", `🛡 ${servsize}`, inline)

    .addField("Channels", `📁 ${chansize}`, inline)

    .addField("Users", `<:bust_in_silhouette:478547279104442368> ${usersize}`, inline)

    .addField("Bot Library", "<:notebook_with_decorative_cover:478547279104442368> Discord.js", inline)

    .addField("Created On", bot.user.createdAt)

    .setFooter(`Information about: ${bot.user.username}. Developed by: bletik bt`)

    .setTimestamp()

    message.delete();

    message.channel.send(botembed);

}

module.exports.help = {

  name:"botinfo"

}