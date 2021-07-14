const Discord = require('discord.js')
const { Client, Message } = require('discord.js');

module.exports = {
  name: 'ping', // Optional
  description: "Shows the ping of the bot.",
  category: 'Help',
  callback: async ({ message, args, text, client, prefix, instance, channel }) => {
    const latency = new Date().getTime() - message.createdTimestamp;
	  const apilatency = Math.round(client.ws.ping);

    const embed = new Discord.MessageEmbed()
      .setTitle("Pong 🏓")
      .setDescription(`Latency: \`${latency}ms\`\nAPI Latency: \`${apilatency}ms\``)
      .setFooter('jp?help')
      .setColor('BLUE')
      .setTimestamp()

      if (message) {
        message.channel.send(embed)
      }
  }
}
