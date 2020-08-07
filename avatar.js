module.exports = {
  name: "avatar",

  description: "Shows users avatars",

  aliases: ["profilepicture", "icon", "pfp"],

  usage: "[mention]",

  guildOnly: false,

  enableBots: true,

  secret: false,

  clearCmd: true,

  cooldown: 10,

  roles: [],

  permissions: [],

  execute(message, args) {
    const Discord = require("discord.js");

    let mentionedUser = message.mentions.users.first() || message.author;

    let embed = new Discord.RichEmbed()

      .setImage(mentionedUser.displayAvatarURL)

      .setColor(1056085)

      .setTitle("Avatar")

      .setFooter(
        `bletik`,
        ""
      )

      .setTimestamp();

    message.channel.send(embed).then(async embedMessage => {
      await embedMessage.react("🖼");

      await embedMessage.react("ℹ");

      const emoji = {
        PIC_PAGE: "🖼",

        INF_PAGE: "ℹ"
      };

      const collector = new Discord.ReactionCollector(
        embedMessage,
        (reaction, user) =>
          Object.values(emoji).includes(reaction.emoji.name) &&
          !user.bot &&
          mentionedUser,
        {
          time: 180000
        }
      );

      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case emoji.INF_PAGE: {
            embedMessage.reactions.get(emoji.INF_PAGE).remove(message.author);

            embed.description = "Requested by: " + message.author;

            embed.thumbnail = {
              url: `${mentionedUser.displayAvatarURL}`,

              width: "80",

              height: "80"
            };

            embed.image = null;

            embed.title = "Avatar";

            embed.fields = [
              {
                name: "Target User:",

                value: `${mentionedUser}`,

                inline: true
              },
              {
                name: "Avatar URL link:",

                value: "[Click Me](" + mentionedUser.displayAvatarURL + ")",

                inline: true
              }
            ];

            embedMessage.edit({
              embed
            });

            break;
          }

          case emoji.PIC_PAGE: {
            embedMessage.reactions.get(emoji.PIC_PAGE).remove(message.author);

            embed.description = null;

            embed.fields = null;

            embed.image = {
              url: `${mentionedUser.displayAvatarURL}`,

              width: 300,

              height: 300
            };

            embed.thumbnail = null;

            embedMessage.edit({
              embed
            });

            break;
          }
        }
      });

      collector.on("end", () => {
        embed.description = "Required by: " + message.author;

        embed.thumbnail = {
          url: `${mentionedUser.displayAvatarURL}`,

          width: "80",

          height: "80"
        };

        embed.image = null;

        embed.title = "Avatar";

        embed.fields = [
          {
            name: "Target User:",

            value: `${mentionedUser}`,

            inline: true
          },
          {
            name: "Avatar URL link:",

            value: "[Click Me](" + mentionedUser.displayAvatarURL + ")",

            inline: true
          }
        ];

        embedMessage.edit({
          embed
        });

        embedMessage.clearReactions();
      });
    });
  }
};
