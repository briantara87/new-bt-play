const { handleVideo, youtube, queue } = require("../index.js");
const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
  var serverQueue = queue.get(msg.guild.id);
  
  if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return 
  const np = new Discord.RichEmbed()
  .setDescription(`${serverQueue.songs[0].title}`)
  .addField(`Author`, `${channel}`)
  
  msg.channel.send(np)
	}
exports.conf ={
  aliases: ['np']
}
exports.help = {
  name: "nowplaying"
}