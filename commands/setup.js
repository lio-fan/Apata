const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class SetupCommand extends Command {
 constructor() {
  super('setup', {
   aliases: ['setup']
  });
 }

async exec(message) {


  const config = require('../config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 

  //const begunEmbed = new Discord.MessageEmbed()
  //.setTitle('Setup Begun.')
  //.setDescription('You successfully begun the setup process. Fill out the following questions to better strengthen your Discord experience.')
  //.setColor(color)

  const phoneEmbed = new Discord.MessageEmbed()
  .setTitle('Mobile Device')
  .setDescription('If you have a mobile device, fill out the type here. If you don\'t, type none.')
  .setColor(color)

  message.channel.send('You successfully begun the setup process. Fill out the following questions to better strengthen your Discord experience.');
  message.channel.send(phoneEmbed)
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
  collector.on('collect', message => {
        const response = message.content
        let responsee = db.get(message.author.id) || 0;
        db.set(message.author.id, response);

    })

 }
}

module.exports = SetupCommand;
