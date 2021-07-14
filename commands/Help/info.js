const Discord = require('discord.js')

module.exports = {
  name: 'info', // Optional
  commands: ['botinfo', 'bot'], // Optional
  slash: 'both',
  description: "Shows info about the Bot.",
  category: 'Help',
  maxArgs: 0,
  callback: ({ message, args, text, client, prefix, instance, channel, interaction }) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("Discord Games")
      .setAuthor('Made by HZR_H3RY')
      .setThumbnail('https://cdn.discordapp.com/attachments/858371116627787776/860809512852389908/discordgamespfp.png')
      .setFooter('jp?help')
      .setColor('BLUE')
      .setTimestamp()
      .addFields(
        {
          name: '👑Owner Server',
          value: '<@796251215968075796>',
          inline: true,
        },
        {
          name: '🔰Co Owner Server',
          value: 'none',
          inline: true,
        },
        {
          name: '👑Owner Bot🤖',
          value: '<@796251215968075796>',
          inline: true,
        },
        {
          name: '🏘Total Servers',
          value: `${client.guilds.cache.size}`,
          inline: true,
        },
        {
          name: '👥Total Users',
          value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,
          inline: true,
        }
      )
  if (message) {
    message.channel.send(embed)
  }
      return embed
  }
}
