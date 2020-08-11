const bot = new Discord.Client();

exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()

    .setTitle("unmute")

    .setDescription(

      "Sorry, the `unm` command can only be executed by the Developer."

    )

    .setColor("BLUE");

  if (message.author.id !== "478547279104442368")