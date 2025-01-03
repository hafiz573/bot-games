const Discord = require('discord.js')

module.exports = {
  name: '8ball', // Optional
  description: "8Ball game.",
  category: 'Fun & Games',
  maxArgs: -1,
  callback: async ({ message, args, text, client, prefix, instance, channel }) => {
	const answers = [
		'It is certain.',
		'It is decidedly so.',
		'Without a doubt.',
		'Yes - definitely.',
		'You may rely on it.',
		'As I see it, yes.',
		'Most likely.',
		'Outlook good.',
		'Yes.',
		'Signs point to yes.',
		'Reply hazy, try again.',
		'Ask again later.',
		'Better not tell you now.',
		'Cannot predict now.',
		'Concentrate and ask again.',
		'Don\'t count on it.',
		'My reply is no.',
		'My sources say no.',
		'Outlook not so good.',
		'Very doubtful.',
	];
	if (!args[0]) {return message.reply('Please provide a question to ask.', { allowedMentions: { repliedUser: false } });}
	const question = args.join(' ');
	const embed = new Discord.MessageEmbed()
		.setTitle('🎱  The Magic 8-Ball  🎱')
		.addField('Question', question)
		.addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`)
		.setColor('RANDOM');
	message.channel.send(embed)
  }
}
