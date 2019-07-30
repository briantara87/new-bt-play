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
exports.run = (bot, message, args, client) => {
   let start = Date.now(); message.channel.send('_ _').then(message => { 
      message.delete(1);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
        .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
        .setTitle(`- There is 9 Commands | - And your Latency`)
        .setColor(`#ecd4fc`)
        .addField("Commands", "`play` `pause` `loop` `queue` `resume` `skip` `stop` `volume `",`true`)
        .addField("Latency", `${diff}ms`, "true") 
        .addField("API", `${API}ms`, true) 
        .addField("Prefix", "z!", true)            
        .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
        .setTimestamp()
        message.channel.send(embed);
})}
exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['h']
}

exports.help = {
  name: "Help"
}