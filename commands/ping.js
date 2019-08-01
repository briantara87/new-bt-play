const { RichEmbed, Client } = require("discord.js");

exports.run = (bot, message, args) => {
   let start = Date.now(); message.channel.send('_ _').then(message => { 
      message.delete(1);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
        .setTitle(`:ping_pong: Pong!`)
        .setColor(`#ecd4fc`)
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
        message.channel.send(embed);
    });
}

