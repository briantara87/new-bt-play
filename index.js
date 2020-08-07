// KUMPULAN CONST

const Discord = require("discord.js");

const { Client, Util, RichEmbed, MessageEmbed, Collection, Uptime } = require('discord.js');

const http = require('http');

const express = require('express');

const app = express();

const fs = require('fs');

const db = require('quick.db');

const { Canvas } = require("canvas-constructor")

const { loadImage } = require("canvas")

const config = require("./config.json");

//const coins = require("./coins.json");

//const xp = require("./xp.json");

const YouTube = require("simple-youtube-api");

const ytdl = require("ytdl-core");

const snekfetch = require('snekfetch');

const cooldown = new Collection();

//const money = require('discord-money'); 

const client = new Client({

    disableEvents: [],

  disableEveryone: true,

  fetchAllMember: false

})

const func = require("./functions.js");

const queue = new Collection();

client.queue = queue;

client.commands = fs.readdirSync('./commands');

client.aliases = {};

const youtube = new YouTube(process.env.YOUTUBE);

for(const cmd of client.commands){

const file = require(`./commands/${cmd}`);

if(!file.conf || !file.conf.aliases) continue;

if(file.conf.aliases instanceof Array){