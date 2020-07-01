const 
{   
    SpeakInVoice,
    KickUser,
    ReactRandomly,
    Help,
    ChangeNickname,
    LeaveVoice,
    AddMessage
} = require('./functions.js');


const syntax = {
    func: [LeaveVoice, SpeakInVoice, KickUser, ReactRandomly, Help, ChangeNickname, AddMessage],
    input: ["leave", "say", "kick", "react", "help", "nickname", "add"]
}


module.exports = {
    syntax
}