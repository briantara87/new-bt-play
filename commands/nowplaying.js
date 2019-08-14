const { handleVideo, youtube, queue } = require("../index.js");
const Discord = require('discord.js');
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const snekfetch = require('snekfetch');

exports.run = async(client, message, args) => {
 
  
 async function handleVideo(video, message, voiceChannel, playlist = false) {
 var serverQueue = queue.get(message.guild.id);
  const curentDurationMinute = Math.floor(serverQueue.connection.dispatcher.time/60000) < 10 ? `0${Math.floor(serverQueue.connection.dispatcher.time/60000)}` : Math.floor(serverQueue.connection.dispatcher.time/60000);
  const currentDurationSeconds = Math.floor((serverQueue.connection.dispatcher.time%60000)/1000) < 10 ? `0${Math.floor((serverQueue.connection.dispatcher.time%60000)/1000)}` : Math.floor((serverQueue.connection.dispatcher.time%60000)/1000);

  if (!serverQueue) return message.channel.send('There is nothing playing.');
		return 
  const np = new Discord.RichEmbed()
  .setDescription(`${serverQueue.songs[0].title}`)
  .addField(`Author`, `${song.channel}`)
  .addField('Request by', ``)
  
  message.channel.send(np)
  const song = {
		id: video.id,
	//	title: Util.escapeMarkdown(video.title),
    uploaded: video.channel.title,
    authors: message.author,
    create: (video.publishedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    voicechan: message.member.voiceChannel.name,
    durationmm: video.durationSeconds ? video.durationSeconds : video.duration / 1000,
    channel: `https://www.youtube.com/channel/${video.channel.id}`,
		url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    duration: video.duration
	};
	if (!serverQueue) {
		const queueConstruct = {
      user: message.author,
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
      loop: false
		};
  }
 }
	}
exports.conf ={
  aliases: ['np']
}
exports.help = {
  name: "nowplaying"
}