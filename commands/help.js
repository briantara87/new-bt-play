const Djs = require("discord.js");
const { RichEmbed, Client } = require("discord.js");


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
      message.delete(500);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
        .setTitle(`:question: There is 9 Commands`)
        .setColor(`RANDOM`)
        .addField("Music", "`play` `pause` `loop` `queue` `resume` `skip` `stop` `volume ` `reload`",`true`)
        .addField("Latency", `${diff}ms`, "true") 
        .addField("API", `${API}ms`, true) 
        .addField("Prefix", "z!", true)
        .addField("_ _", "_ _", "false")              
        .setFooter("©Zetsuya Bot | 2019 | Zay#5616")
        message.channel.send(embed);
})}
exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['h']
}

exports.help = {
  name: "Help"
}