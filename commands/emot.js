const Discord = require("discord.js");

const bot = new Discord.Client();

exports.run = async (client, message, args) => {

  const fishes = ["<a:s_ngibing:725932668138684446>","<a:unter_unter:726585466979221524>];

  const fish = fishes[Math.floor(Math.random() * fishes.length)];
message.delete();
  message.channel.send(
    `${fish}`
  );

};

