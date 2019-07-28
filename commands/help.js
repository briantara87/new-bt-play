//This command will be required package discord.js
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = async(client, msg, args) => { // Modification
  let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  //if (!args[0]) {
    
  let embed = new Discord.RichEmbed()  // This is a defined for Embed
  .setColor('RANDOM') // This is a color for The Embed
  .setTitle(`Beta Commands`) // This for A Title in from Embed
  .setTimestamp()
  .setFooter(`Requested By: ${msg.author.tag}`)
  .addField(":o: Commands:", "Play, Skip, Volume, Prefix, Ping, Stop, Pause, Resume, Loop") // You cant add The Command in Here and You cant add Any more field for The Type Commands
  msg.channel.send(embed)
    
  // This is will be send The Embed
} 
// Let's test it out!


exports.conf = {
  aliases: ['h']
}

exports.help = {
  name: "Help"
}