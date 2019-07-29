const Djs = require("discord.js");

//dule.exports.run = async (client, msg, args) => { // Modification. baca dm lg.
//  let opti = args.slice(0).join(' ')
//  let optic = opti.toLocaleLowerCase()
//if(!opti) return msg.channel.send('help here\nhelp dm')
  
//if(opti.match('here')) {
//    let embed = new Djs.RichEmbed()
//    .setTitle('Help Command')
//    .setColor('BLUE')
//    .setTimestamp()
//    .setThumbnail(client.user)
//    msg.channel.send(embed)
//}
  
//  if(opti.match('dm')) {
//    let embed = new Djs.RichEmbed()
 //   .setTitle('Help Command')
//    .setColor('BLUE')
//    .setTimestamp()
//    .setThumbnail(client.user)
//    msg.author.send(embed)
//  }
//
exports.run = (bot, message, args) => {
   let start = Date.now(); message.channel.send(':ping_pong:').then(message => { 
      message.delete(5000);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
        .setTitle(`:ping_pong: Pong!`)
        .setColor(`RANDOM`)
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        message.channel.send(embed);
    });
}

exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['h']
}

exports.help = {
  name: "Help"
}