const Discord = require('discord.js');
const { Client, Util, RichEmbed, MessageEmbed, Collection } = require('discord.js');
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const db = require('quick.db');
const { Canvas } = require("canvas-constructor")
const { loadImage } = require("canvas")
const config = require("./config.json");
const YouTube = require("simple-youtube-api");//biar musik ne bisa nyala. :u
const ytdl = require("ytdl-core");
const snekfetch = require('snekfetch');
const cooldown = new Collection();
const client = new Client({
    disableEvents: [
],
  disableEveryone: true,
  fetchAllMember: false
})

const func = require("./functions.js");
const queue = new Collection();
client.queue = queue;
client.commands = fs.readdirSync('./commands');
client.aliases = {};

const youtube = new YouTube(process.env.YOUTUBE);

for(const cmd of client.commands){
const file = require(`./commands/${cmd}`);
if(!file.conf || !file.conf.aliases) continue;
if(file.conf.aliases instanceof Array){
for(const al of file.conf.aliases){
client.aliases[al] = cmd;
    }
  }else{
client.aliases[file.conf.aliases] = cmd;
}
}

for(const cmd of client.commands){
const file = require(`./commands/${cmd}`);
if(!file.conf || !file.conf.aliases) continue;
  
}

require("./server.js");


function random_playing() {
  let status = [`On Development`] //Set status ne disini
  let random = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(random, {type: "STREAMING", url: 'https://www.twitch.tv/zetsuya'}); //jan di ubah ubah, nnti meledug :u.
}

client.on('ready', () => {
  var clientlog = `
[BOT LOGS] Zetsuya Status [BOT LOGS]
=============================================
With ${client.users.size} users
With ${client.guilds.size} servers
With ${client.channels.size} channels
=============================================
`
  
  console.log(clientlog);
  setInterval(random_playing, 8000);
});


client.on('message', async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[msg.guild.id]){ 
     prefixes[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  //Akhir dari Prefix CMD!
  
    if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
    let tagEmbed = new Discord.RichEmbed()
    .setThumbnail(client.user.displayAvatarURL) // ok!
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Prefix`)
    .setDescription(`Global Prefix =  (**z!**) \nPrefix In This Server =  (**${prefixes[msg.guild.id].prefix}**)`);
    msg.channel.send(tagEmbed);
}
  
  let prefix = prefixes[msg.guild.id].prefix;
  if (!msg.content.startsWith(prefix)) return;
  const messageArray = msg.content.split(" ");
  const args = msg.content.slice(prefix.length).trim().split(' ');
  const searchString = messageArray.slice(1).join(' ');
  const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  console.log(searchString);
  const serverQueue = queue.get(msg.guild.id);
  let sender = msg.author;
  let cmd = args.shift().toLowerCase();
  msg.member.voiceChannel === msg.member.voice;
  
// Variasi ^^^
  
  try {
      if(client.aliases[cmd]){
				delete require.cache[require.resolve(`./commands/${client.aliases[cmd]}`)];
        require(`./commands/${client.aliases[cmd]}`).run(client, msg, args);

      }else{

    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

		let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args, func);

      }

  } catch (e) {
    console.log(e.stack)                                                                  
  } finally {
   console.log(`${msg.author.tag} used ${cmd} in guild ${msg.guild.name} (${msg.guild.id})`)
}
  
//Akhir dari command handal.
  
  exports.handleVideo = handleVideo;
exports.queue = queue;

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
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
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);
    
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;

    var addedembed = new RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`🎶 Added Queue:`)
    .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=120&height=60`)
    .setDescription(`**[${song.title}](${song.url})**`)
    .addField("Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
    .addField('<:youtubers:529206401327955998> Uploaded by:', `[${song.uploaded}](${song.channel})`, true)
    .addField('Voice Channel:', song.voicechan, true)
    .addField('👤 Requested By:', song.authors.tag, true)
    .addField('Uploaded At:', song.create, true)
    .addField('Current Volume:', `${serverQueue.volume}%`, true)
    .setImage('https://cdn.glitch.com/a3c85270-31aa-410d-a063-a81ad221d5c7%2F13-37-32-WhisperedJovialAuklet-size_restricted.gif?1559198474040')
    .setTimestamp();
    
		return message.channel.send(addedembed);
	}
	return undefined;
}

function play(guild, song, message) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
  
  var playembed = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`🎶 Start Playing:`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .setDescription(`**[${song.title}](${song.url})**`)
  .addField("Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
  .addField('<:youtubers:529206401327955998> Uploaded by:', `[${song.uploaded}](${song.channel})`, true)
  .addField('Voice Channel:', song.voicechan, true)
  .addField('👤 Requested By:', song.authors.tag, true)
  .addField('Uploaded At:', song.create, true)
  .addField('Current Volume:', `${serverQueue.volume}%`, true)
  .setImage('https://cdn.glitch.com/a3c85270-31aa-410d-a063-a81ad221d5c7%2F13-37-32-WhisperedJovialAuklet-size_restricted.gif?1559198474040')
  .setTimestamp();
  
	serverQueue.textChannel.send(playembed);
}