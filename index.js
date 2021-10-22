const keepAlive = require("./keep_alive")
const { Client } = require('discord.js-selfbot-v11')
const dotenv = require('dotenv');
const DISCORD_TOKEN = (process.env.DISCORD_TOKEN);
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Subscribe!", {type: "STREAMING/PLAYING/WATCHING/LISTENING", url: "https://twitch.tv/your-url"}) // Put the Type as anything, like: PLAYING, STREAMING, WATCHING etc.
   console.log(`${client.user.username} has been set!`)
})

keepAlive()
client.login(DISCORD_TOKEN);
