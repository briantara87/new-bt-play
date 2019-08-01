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
        let embed = new RichEmbed()
        .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
        .setTitle(`- There is 10 Commands` )
        .setColor(`#ecd4fc`)
        .addField("Commands", ":grey_exclamation: HELP\n» If you need help to use this bot\n:grey_question: INFO\n» Information of the bot\n:desktop: CMDS\n» Avaible commands to use\n<:Youtube:588594913243955200> PLAY\n» Play your music with ${crafty[message.guild.id].prefix}play [URL/NAME]\n#Right now our bot is only can play from youtube\n[PAUSE]\n#You don't want to miss your favorite video / song?\n[STOP]\n#You don't want Zetsuya tired?\n[LOOP]\n#You want to loop your Video/Songs?\n[VOLUME]\n#Zetsuya is too noisy?\n[SKIP]\n#You don't like it? SKIP IT\n[INVITE]\n#Take Zetsuya with you <3\nPING\n»Check the speed that made Zetsuya and you meet",`false`)
        .addField("Other commands will be added soon :ok_hand:","_ _","true")         //ngapain? ~andra
        .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
        .setTimestamp()
        message.channel.send(embed);
}
