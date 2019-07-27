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

client.login(process.env.TOKEN).catch(e => {
  console.log('NjA0NjUyMDExODU3NjQxNDg0.XTxENg.K9aW8_zCQLQK83lxoWsz5VrFkKg')// ini tempat untuk token kalian
})