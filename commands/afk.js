exports.exec = async (message) => {
  if (!message.guild.usersAFK) message.guild.usersAFK = [];
  if (message.guild.usersAFK.includes(message.author.id)) return;

  message.guild.usersAFK.push(message.author.id);

  await message.channel.send({
    embed: {
      color: 0xecd4fc,
      description: `${message.author} I've set you as AFK. If anyone mentions you while you're away, I'll let them know. AFK mode will be disabled once you're back and send a message anywhere.`
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [],
  enabled: true,
  argsDefinitions: [
    { name: 'message', type: String, alias: 'm', defaultOption: true }
  ]
};
