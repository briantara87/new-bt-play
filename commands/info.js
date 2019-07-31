const { RichEmbed, Client, uptime, client } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
const cfg = require('../config.json')
function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
exports.run = async (client, msg, args) => {
  let message = msg
  let bot = client
    let u = convertMS(bot.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"
    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
      .setTitle('My Uptime')
      .setColor(`RANDOM`)
      .setDescription(`**Uptime :**  ${uptime}`)
      .setThumbnail(bicon)
      .setFooter(`${cfg.botname} | by ${cfg.owner}`, cfg.botavatar);

    message.channel.send(botembed);
}
exports.run = (bot, message, args) => {
   let start = Date.now(); message.channel.send('_ _').then(message => { 
      message.delete(1);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
    .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
        .addField(`Name`, `Zetsuya`, true)
        .addField(`Discriminator`, `#1862`, true)
        .addField(`Global Prefix`, `z!`, true)
        .addField(`Version`, `[0.0.4a](https://github.com/Zay-Development/Zetsuya-Bot/tree/master)`, true)
    .addField(`Node JS`, `[9.11.2](https://nodejs.org/en)`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server`, `${bot.guilds.size}`, "true")
        .addField(`Channels`, `${bot.channels.size}`, "true")
        .addField(`Users`, `${bot.users.size}`, "true")
                .addField(`Support`, `[Glitch.com](https://glitch.com)\n_ _`, true)
                .addField(`Discord`, `[MaDocsDevelopment](https://discord.gg/Xdcbk2X)`, true)
    .addField(`Developer`, `[Zay#5616](https://github.com/Zay-Development)`, true)
        .addField(`Uptime`)
    .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(0xECD4FC)
        message.channel.send(embed);
    });
}
