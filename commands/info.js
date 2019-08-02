const { RichEmbed, Client, uptime, client } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
const cfg = require('../config.json')
const config = require("../config.json");
function convertMS(ms) {
    var y, mt, w, d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    w = Math.floor(d / 7);
    d = d % 7;
    mt = Math.floor(w / 4);
    w = d % 4;
    y = Math.floor(mt / 12);
    mt = d % 12;
    return {
      y: y
      , mt: mt
      , w: w
        , d: d
        , h: h
        , m: m
        , s: s
    };
};
exports.run = (bot, message, args) => {
    let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!crafty[message.guild.id]){ 
     crafty[message.guild.id] = {
       prefix: config.prefix
     }
  }
     let u = convertMS(bot.uptime);
    let uptime = u.y + "-" + u.mt + "-" + u.w + "-" + u.d + " " + u.h + ":" + u.m + ":" + u.s + ""
    const duration = moment.duration(bot.uptime)
        let embed = new RichEmbed()
    .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
        
        .addField(`Name`, `Zetsuya`, true)
        .addField(`Discriminator`, `#1862`, true)
        .addField(`Prefix`, `${crafty[message.guild.id].prefix}`, true)
        .addField(`Version`, `[0.0.4a](https://github.com/Zay-Development/Zetsuya-Bot/tree/master)`, true)
    .addField(`Node JS`, `[9.11.2](https://nodejs.org/en)`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server`, `${bot.guilds.size}`, "true")
        .addField(`Channels`, `${bot.channels.size}`, "true")
        .addField(`Users`, `${bot.users.size}`, "true")
                .addField(`Support`, `[Glitch.com](https://glitch.com)`, true)
                .addField(`Discord`, `[MaDocsDevelopment](https://discord.gg/Xdcbk2X)`, true)
    .addField(`Developer`, `[Zay#5616](https://github.com/Zay-Development)`, true)
        .addField(`Created at`, `${bot.user.createdAt.toLocaleString()}`, `true`)
        .addField(`Thanks for using our bot, we love you all_                          _`, `From creator of Zetsuya bot :heart:`, `true`)
    .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(0xECD4FC)
        message.channel.send(embed);
    };

