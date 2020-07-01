const {syntax} = require('./syntax.js');
const { RandomReply } = require('./functions.js');

const ParseMessage = (message) => {

    message = message.replace(/[^0-9a-z ]/gi, '');
    return message;
}


const ExecuteCommand = async (client, msg, message) => {
    
    var match = false;

    const inputs = syntax.input;  
    const funcs = syntax.func;

    for (let i = 0; i < inputs.length; i++) {
        
        if(message.includes(inputs[i])){
            match = true;
        }

        if(match == true){
            await funcs[i](client, msg, message);
            break;
        }
        
    }

    if(match == false){
        RandomReply(client, msg, message);
    }
}

module.exports = {
    ParseMessage,
    ExecuteCommand
}