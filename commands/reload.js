const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Reload")
  .setDescription("Sorry, this command only can be executed by developer!")
  .setColor(`#ecd4fc`);
  if(message.author.id !== '395407295867256833') return message.channel.send(embed);
  try{
    delete require.cache[require.resolve(`./${args[0]}`)];
  let Aembed = new Discord.RichEmbed()
  .setTitle("Reloading..")
  .setDescription(`${args[0]} successfully reloaded!`)
  .setColor(`#ecd4fc`)
    return message.channel.send(Aembed);
     }catch(e){
     return message.channel.send("I can't find that command!")
     }
}; 