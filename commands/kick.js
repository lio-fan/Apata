const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class MuteCommand extends Command {
 constructor() {
  super('kick', {
   aliases: ['kick']
  });
 }

 exec(message) {


  const config = require('../config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
  let kicked = message.mentions.members.first()
  let kicker = message.author
  if(message.member.roles.cache.find(r => r.name === "Admin")) {
    kicked.kick()


    message.delete()

    muter.send(`You have kicked ${kicked.user}.`)
}

 }
}

module.exports = MuteCommand;
