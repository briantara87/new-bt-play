const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Please tag user to kick`)
      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");
   if(member.user.id === "291221132256870400") return message.channel.send("I can't kick my owner!")

    
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
      let kick = new Discord.RichEmbed()
      .setColor(`#ecd4fc`)
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }