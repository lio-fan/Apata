const { AkairoClient, CommandHandler } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')


class MyClient extends AkairoClient {
 constructor() {
  super({
   ownerID: '475281284675928084',
  }, {
   disableEveryone: true
  });
  this.commandHandler = new CommandHandler(this, {
   directory: './commands/',
   prefix: ','

  });
  this.commandHandler.loadAll();

 }

}
const client = new MyClient();
const config = require('./config.json')

let colors = config.colors
let color = colors[Math.floor(Math.random() * colors.length)];	 

client.on('guildMemberAdd', member => {
    if(member.id === '710691084086411366') {
        member.roles.add('742502255298740306')
        member.roles.add('742514712251728022')
    }


    let mutedcount = db.get(member.id) || 0;
    const channel = client.channels.cache.get('742549683162972293')
    if(mutedcount !== 0) {
        
        const guild = client.guilds.cache.get('742502254606811156')
        const channel = client.channels.cache.get('742856021185396737')

        member.roles.add('742849733600739358')

        const muteEvadeEmbed = new Discord.MessageEmbed()
        .setTitle('User attempted to evade mute:')
        .setDescription('This happens when a user is muted, leaves the server, and rejoins in an attempt to remove their muted role.')
        .addField('User:', `${member}`)
        .addField('User ID:', `${member.id}`)
        .setColor(color)
        
        
        channel.send(muteEvadeEmbed)
    } 


    
    const embed = new Discord.MessageEmbed()

    .setTitle('The most centralized and diverse robot on the platform.')
    .setDescription('Control your calendar, music, and life. If you stumble to any difficulty with our simplistic design, refer to the channels below.')
    .addField('Bot Support', '<#742847204863115345>')
    .addField('Development Progress', '<#742847134776164452>')
    .addField('Rulebook/Guide', '<#742550884072030300>')
    .setColor('#42f548')
    member.send(embed);
 });


 
client.login(config.token);
