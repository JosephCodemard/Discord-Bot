const { prefix, token, bot_id, server_general_id} = require('./config.json');
const { emojis, replies } = require('./data.json');

const fs = require('fs');
const gTTS = require('gtts'); 

const LeaveVoice = async (client, msg, message) => {
    
    if(msg !== undefined){

        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join()
            .then(connection => {
                    connection.disconnect();
    
            }).catch(err => {
                connection.disconnect();
            });
        }else{
            channel.send("You are not my voice channel!")
        }  

    }
}

const SpeakInVoice = async (client, msg, message) => {
    if(msg !== undefined){
        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);

        
        var speech = message.split("say")[1];

        var gtts = new gTTS(speech, 'en'); 
        gtts.save('Voice.mp3', function (err, result){ 
            if(err) { throw new Error(err); } 
        });
        
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './Voice.mp3'));
    
                dispatcher.on("finish", end => {
                    connection.disconnect();
                });
    
            }).catch(err => {
                console.log(!"[ERROR] ", err);
                connection.disconnect();
            });
        }else{
            channel.send("You are not in a voice channel!")
        }        
    }
}


const KickUser = async (client, msg, message) => {
    if(msg !== undefined){
        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);

        var membertokick = msg.guild.member(msg.mentions.users.first());

        if(msg.mentions.users.first() === bot_id){
            msg.channel.send('Going to kick : ' + membertokick);
            membertokick.kick();
        }else{
            var membertokick = msg.guild.member(msg.mentions.users.second());
            msg.channel.send('Going to kick : ' + membertokick);
            membertokick.kick();
        }

    }
}


const ReactRandomly = async (client, msg, message) => {
    if(msg !== undefined){
        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);


        var num = message.split(" ")[2];

        if(num == undefined){
            num = 1;
        }else{
            if(num > 10){
                num = 10;
            }
        }


        for (let i = 0; i < num; i++) {
            randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            msg.react(randomEmoji);   
        }
    }

}


const ChangeNickname = async (client, msg, message) => {
    if(msg !== undefined){
        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);

        if (!msg.guild.me.hasPermission('MANAGE_NICKNAMES')) {
            channel.send('I don\'t have permission to change your nickname!');
        }else{
            msg.member.setNickname(message.split(" ")[2]);
        }

    }
}

const Help = async (client, msg, message) => {

    if(msg !== undefined){

        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);

        link = "https://docs.google.com/document/d/1Q-QJQpZAZfQJVh2a2zUgiDgl5yPSANknOgWARUjGSc4/edit?usp=sharing"
        github = "https://github.com/JosephCodemard/Discord-Bot"
        channel.send("Check out my documentation! ");
        channel.send("docs: " + link);
        channel.send("github repo: "+ github);
    }

}

const AddMessage = async (client, msg, message) => {

    if(msg !== undefined){

        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);

        const messageToAdd = message.split("add")[1];
        if(messageToAdd !== undefined){

            var m = JSON.parse(fs.readFileSync('./data.json').toString());
            m.replies.push(messageToAdd);


            fs.writeFile("./data.json", JSON.stringify(m), error => {
                if (error) { channel.send('An error occured adding the message.') }
                else channel.send(`Message Added : ${messageToAdd}`);
            });
        }else{
            channel.send("Please specify a reply")
        }
    }

}

const RandomReply = async (client, msg, message) => {
    if(msg !== undefined){

        const id = msg.channel.id;
        const channel = client.channels.cache.get(id);

        var randomMsg = "an error occured";

        if(replies.length > 1){
            randomMsg = replies[Math.floor(Math.random() * (replies.length + 1))];
        }

        channel.send(randomMsg);
    }
}

module.exports = {
    SpeakInVoice,
    ChangeNickname,
    KickUser,
    ReactRandomly,
    Help,
    LeaveVoice,
    AddMessage,
    RandomReply
}

