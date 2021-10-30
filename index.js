const Discord = require('discord.js')
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

const testServer = '820906598783516702'
const ownerID = '796251215968075796'

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION']
})

client.on('ready', () => {
  console.log(`${client.user.tag} is online`) 
  client.user.setPresence({
    activity: {
      type: "PLAYING",
      name: "game bot"
    },
    status: "idle"
  });

require("http").createServer((req, res) => res.end("alive")).listen();

    new WOKCommands(client, {
    commandsDir: 'commands',
    featuresDir: 'features',
    messagesPath: 'messages.json',
    testServers: [testServer]
  })
    .setDefaultPrefix(process.env.PREFIX)
    .setColor('BLUE')
    .setMongoPath(process.env.MONGO_URI)
    .setBotOwner([ownerID])
    .setCategorySettings([
      {
        name: 'Games',
        emoji: '🎮',
      },
      {
        name: 'Development',
        emoji: '⚙',
        hidden: true
      },
      {
        // You can change the default emojis as well
        // "Configuration" is ⚙ by default
        name: 'Configuration',
        emoji: '🚧',
        // You can also hide a category from the help menu
        // Admins bypass this
        hidden: true
      }
  ])
})

client.login(process.env.TOKEN)
