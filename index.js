const keepAlive = require("./keep_alive")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Put text in here", {type: "LISTENING/STREAMING/WATCHING/LISTENING", url: "https://twitch.tv/ninja"})
   console.log(`Successfully Logged in as ${client.user.username}`)
})

keepAlive()
client.login(TOKEN);
