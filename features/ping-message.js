const Discord = require('discord.js')

module.exports = (client, instance) => {

  client.on("message", async message => {

    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  const pingembed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setAuthor(message.author.tag)
    .setColor("BLUE")
    .setDescription("The Prefix for the Bot is `jp?`, try using `jp?help`")
    .setFooter("Made by HZR_H3RY")
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/858371116627787776/860809512852389908/discordgamespfp.png')

    if (message.mentions.has(client.user.id)) {
      message.channel.send(pingembed);
  };
})
}

module.exports.config = {
  // The display name that server owners will see.
  // This can be changed at any time.
  displayName: 'Ping Message',
  
  // The name the database will use to set if it is enabled or not.
  // This should NEVER be changed once set, and users cannot see it.
  dbName: 'PING MESSAGE',
  
  // Being true means a database connection must be present before the
  // feature is enabled.
  loadDBFirst: false
}
