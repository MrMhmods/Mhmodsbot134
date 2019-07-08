const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '+test') {
    msg.reply('شغال!');
  }
});

client.login('NTk3NzM2MTYxMjEzMDIyMjQ5.XSMbWA.hjtYCC6zn2wgA0R0a8tCp2hFkCY');
