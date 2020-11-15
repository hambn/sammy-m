const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    info: {
        name: "setprefix",
        description: "Set new prefix",
        usage: "<prefix>",
        aliases: ["Setprefix"]
    },

    run: async function(client, message, args){
        if (!message.member.hasPermission("ADMINISTRATOR")) return messsage.channel.send("You have insufficient permissions to execute this command! [ADMINISTRATOR ONLY]")
        if (!args[0]) return message.channel.send("Please enter the new prefix for the bot!")
        if (args[1]) return message.channel.send("Prefix can only be one word!")
        db.set(`prefix_${message.guild.id}`, args[0])
        message.channel.send("Prefix Set!")
    }
}