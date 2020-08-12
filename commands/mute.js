const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class MuteCommand extends Command {
 constructor() {
  super('mute', {
   aliases: ['mute', 'silence']
  });
 }

 exec(message) {


  const config = require('../config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
  let muted = message.mentions.members.first()
  let muter = message.author
  let mutedrole = '742849733600739358'
  if(message.member.roles.cache.find(r => r.name === "Admin")) {
    muted.roles.add(mutedrole)
    let mutedcount = db.get(muted.user.id) || 0;
    db.set(muted.user.id, mutedcount+1);

    message.delete()

    muter.send(`You have muted ${muted.user}.`)
}

 }
}

module.exports = MuteCommand;
