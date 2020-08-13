const Discord = require("discord.js");

const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(

    message.mentions.users.first() || message.guild.members.get(args[0])

  );
    if (message.author.id !== "478547279104442368")  {
    return message.channel.send(
      "Sorry, you don't have permissions devloper to use his command"
 useuthor.id)
    return message.channel.send("You cannot mute yourself!");

  let muterole = message.guild.roles.find(`name`, "prey");

  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "prey",

        color: "#840800",

        permissions: []
        
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,

          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  let mutetime = args[1];

  if (!mutetime) return message.channel.send("You didn't specify a time!");

  await tomute.addRole(muterole.id);

  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function() {
    tomute.removeRole(muterole.id);

    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

  
  message.delete();

};

 function clean(text) {

  if (typeof(text) === 'string')

    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));

  else

      return text;

  }

module.exports.help = {
 
  name: "devm"
  
  }
}