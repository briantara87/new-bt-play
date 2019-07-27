const Djs = require('discord.js')// untuk memasukan package discord.js
let client = new Djs.Client() //client kalian

client.on('ready', () => {
  console.log(`Bot ${client.user.username} sudah siap digunakan!`)// ini adalah message jika bot kalian online
})

client.on('message', async (msg) => {
  if(msg.content === 'Hello') {
    msg.channel.send(`${msg.author} Hello to!`)// ini adalah auto responder
  }
})

client.on('ready', () => {
  client.user.setStatus('Online')
  client.user.setGame('On ${client.guilds.size} Server!', 'https://twitch.tv/pewdiepie')
  client.guilds.size('')
})

client.login('NjA0NjUyMDExODU3NjQxNDg0.XTxQWw.QJd_KZo86mvqHDS9-dIhlXn8HQY');