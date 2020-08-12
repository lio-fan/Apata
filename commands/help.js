const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }

async exec(message) {
  let responsee = db.get(message.author.id) || 0;
  message.channel.send(responsee)

  const config = require('../config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 

  const exampleEmbed = new Discord.MessageEmbed()
	 .setColor(color)
   .setTitle('**Command list:**')
    .addField(',suggest', 'Suggest ideas for server & bot development.')


  return message.channel.send(exampleEmbed);
 }
}

module.exports = HelpCommand;
