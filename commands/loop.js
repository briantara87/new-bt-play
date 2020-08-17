let { RichEmbed } = require('discord.js')
const { handleVideo, queue } = require("../index.js")

exports.run = async(client, msg, args) => { //mampus terkejut merah semua :u
  let message = msg
  const serverQueue = queue.get(message.guild.id);
  if(!message.member.voiceChannel) return message.channel.send({
        embed: {
            description: `${message.author}, Anda tidak berada di saluran suara!.`
        }
    });
    if(!serverQueue) return message.channel.send({
        embed: {
            description: `Tidak ada yang bermain`
        }
    });
    serverQueue.loop = !serverQueue.loop;
    client.queue.set(message.guild.id, serverQueue)
    message.react('🔁');
    if(serverQueue.loop) return message.channel.send({
        embed: {
            description: `:repeat: mengulangi antrian saat ini!`
        }
    })
    message.react('🔁');
    return message.channel.send({
        embed: {
            description: `:repeat: Berhenti mengulangi antrian saat ini!`
        }
    })
}//:V