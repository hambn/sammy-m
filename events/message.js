const db = require('quick.db')

module.exports = async (client, message) => {
  if (message.author.bot) return;
  //Prefixes also have mention match
  const Discord = require('discord.js')
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const customprefixhas = db.has(`prefix_${message.guild.id}`)
  if (customprefixhas) {
  const customprefix = db.get(`prefix_${message.guild.id}`)
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : customprefix;
  
  if (message.content.indexOf(prefix) === 0) {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //Making the command lowerCase because our file name will be in lowerCase
    const command = args.shift().toLowerCase();
  
    //Searching a command
    const cmd = client.commands.get(command);
    //Searching a command aliases
    const aliases = client.commands.find(x => x.info.aliases.includes(command))
  
    //Executing the codes when we get the command or aliases
    if(cmd){
      cmd.run(client, message, args);
    }else if(aliases){
      aliases.run(client, message, args);
    }else return;
  } else return;

  } else {
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : 's!';

  if (message.content.indexOf(prefix) === 0) {

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command);
  //Searching a command aliases
  const aliases = client.commands.find(x => x.info.aliases.includes(command))

  //Executing the codes when we get the command or aliases
  if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return;
} else {
 
  
  }
}
};
