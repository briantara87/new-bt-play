const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
let embed = new Discord.RichEmbed()
  .setTitle("Evaluation")
  .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
  .setColor("BLUE");
  if(message.author.id !== '395407295867256833') return message.channel.send(embed);
  function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
    return text;
  } try {
    const code = args.join(" ");
    let evaled = eval(code);
    if (typeof evaled !== "string")
    evaled = require("util").inspect(evaled);
    let embed = new Discord.RichEmbed()
    .setTitle(`Evaluated in ${Math.round(client.ping)}ms`)
    .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
    .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(client.token, "Are you retarded?")}\n\`\`\``)
    .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
    .setColor('GREEN');
    message.channel.send({embed});
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
  }
}