const Djs = require("discord.js");

const { RichEmbed, Client } = require("discord.js");

const config = require("../config.json");

const fs = require("fs");

exports.run = (bot, message, args, client) => {

    let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!crafty[message.guild.id]){ 

     crafty[message.guild.id] = {

       prefix: config.prefix

     }

  }

        let embed = new RichEmbed()

        .setAuthor(`Now Playing`, `https://cdn.discordapp.com/attachments/603134109371334666/611156158543036428/music-cd.png`)

        
        
          .setColor(`random`)
          .set        .setTimestamp()

        message.channel.send(embed);

  message.delete();

}

