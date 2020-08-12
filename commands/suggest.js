const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class SuggestCommand extends Command {
 constructor() {
  super('suggest', {
   aliases: ['suggest', 'contribute', 'idea']
  });
 }

 exec(message) {
  const config = require('../config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
    console.log(`[SUGGESTION]: ${message.content}, ${message.author.tag}`)
  const exampleEmbed = new Discord.MessageEmbed()
	 .setColor(color)
     .setTitle('**Suggestion Added:**')
     .setDescription(`${message.author}, your suggestion has been successfully added.`)
     


  return message.channel.send(exampleEmbed);
 }
}

module.exports = SuggestCommand;
