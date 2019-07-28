let { RichEmbed } = require('discord.js')
const { handleVideo, queue } = require("../index.js")

exports.run = async(client, msg, args) => { //mampus terkejut merah semua :u
  const serverQueue = queue.get(msg.guild.id);
  if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
  if (msg.guild.member(client.user).voiceChannel.id !== msg.member.voiceChannel.id) return msg.reply('You must loop in same channels of the music!')
  if (!serverQueue) return msg.channel.send("This server doesn't have a queue");
  serverQueue.loop = !serverQueue.loop
  if(serverQueue.loop) return msg.channel.send('**🔁 Repeated current queue!**');
  return msg.channel.send('**🔁 Unrepeated current queue!**');
}//:V