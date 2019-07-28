const { handleVideo, youtube } = require("../index.js");

exports.run = async(client, msg, args) => {
  const queue = new Map()//baru bisa
  var serverQueue = queue.get(msg.guild.id);
  
  if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

exports.help = {
  name: "resume"
}