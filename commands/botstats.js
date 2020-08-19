const Djs = require("discord.js");

const { RichEmbed, Client } = require("discord.js");

const config = require("../config.json");

const fs = require("fs");


module.exports = (self) => {

  self.registerCommand('botstats', function (msg, args) {

    if (self.guilds.size === 0) return this.send(msg, 'This command requires you to be in at least one guild to work with the best accuracy.')

    var guildList = null

    guildList = this.self.guilds.map(g => g)

    guildList = guildList[~~(Math.random() * guildList.length)]

    var statsUser = guildList.members.get(this.self.user.id)

    this.send(msg, [

      `[===================================]`,

      `| Logged in as ${this.self.user.username}`,

      `| Your Discord status is "${statsUser.status}". Current stats:`,

      `|    - ${self.guilds.size} servers (${Object.keys(self.channelGuildMap).length} channels) (${self.users.size} users)`,

      `|    - ${self.relationships.size} friends (${self.relationships.filter(r => r.status !== 'offline').length} online)`,

      `[===================================]`

    ].join('\n'))
    
  })
   }