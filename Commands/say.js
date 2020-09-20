module.exports = {
    name: 'say',
        description: 'say [message] - make the bot talk',
        args: true,
        
        execute(message, args) {
                // To get the "message" itself we join the `args` back into a string with spaces: 
                const sayMessage = args.join(" ");
                // Then we delete the command message. The catch just ignores the error with a cute smiley thing.
                message.delete().catch(O_o=>{}); 
                // And we get the bot to say the thing: 
                message.channel.send(sayMessage);
        }
        
}