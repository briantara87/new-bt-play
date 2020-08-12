const Discord = require("discord.js");

const bot = new Discord.Client();

 
exports.run = (client, message, args) => {

    const user = message.mentions.users.first();

    if (message.author.id !== "478547279104442368")

 

  	message.guild.member(user).addRole(bletik).then(() => {      message.channel.send("***You have successfully! :white_check_mark:***")
message.delete ();
      })

    }