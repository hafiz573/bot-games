const SnakeGame = require('snakecord');
const Discord = require("discord.js");

module.exports = {
  name: 'snake', // Optional
  description: "Play snake in Discord.",
  category: 'Games',
  callback: async ({ message, args, text, client, prefix, instance, channel }) => {

  const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: true,
    gameOverTitle: "Game Over"
  });

  const config = {
    token: (process.env.TOKEN),
}

    return snakeGame.newGame(message);
  }
}
