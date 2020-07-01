const Discord = require('discord.js');
var fs = require('fs');

const { prefix, token, bot_id, server_general_id, bot_name} = require('./config.json');
const { ParseMessage, ExecuteCommand } = require('./ParseMessage.js');

const client = new Discord.Client();



//console.log("data: " + data);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.get(server_general_id);
    channel.send(`${bot_name} Active...`);
});
  
client.on('message', msg => {

    if(msg.member.id != bot_id){
        message = ParseMessage(msg.content.toLowerCase());
        //splitmsg = message.split(" ");


        if (msg.content.startsWith(prefix) || msg.content.startsWith(bot_id) || msg.mentions.users.first()== bot_id) {
            //console.log("msg recieved");
            ExecuteCommand(client, msg, message);
        }
    }

});  


client.login(token);