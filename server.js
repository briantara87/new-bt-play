const discord = require("discord.js");

const client = new discord.Client({ disableMentions: "everyone" });

const db = new Map();

const fs = require("fs");

const snek = require("node-superfetch");
const { prefix } = require("./config.json");

client.aliases = new discord.Collection();

client.commands = new discord.Collection();

client.prefix = prefix;

client.queue = new Map();

client.hastebin = async text => {

  const { body } = await snek

    .post("https://bin-clientdev.glitch.me/documents")

    .send(text);

  return `https://bin-clientdev.glitch.me/${body.key}`;

};



const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://zetsuya.glitch.me/`);
}, 280000);

/*


client.on("message", msg => {

  if (msg.author.bot) return;

  if (!msg.guild) return;

  if (msg.content == `<@${client.user.id}>`) {

    const embed = new discord.MessageEmbed()

      .setDescription(`:wave: | My prefix is ${prefix}`)

      .setfooter("to see commands type `87commands`")

      .setColor("RANDOM");

    msg.channel.send(embed);

  })
  client.login(process.env.TOKEN);
  */