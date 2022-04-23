const keepAlive = require("./keep_alive")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Put Activity here", {type: "WATCHING/LISTENING/STREAMING/PLAYING", url: "https://twitch.tv/ninja"}) // put a twitch url if you selected STREAMING as your activity
   console.log(`Log in account name: ${client.user.username}`)
})

keepAlive()
client.login(TOKEN);
