module.exports ={
    name:"say",
    description:"Make the bot talk",
    usage: "[message]",
    args: true,
    cooldown: 5,
    execute(message, args){
        const sayMessage= args.join(" ");
        message.delete();
        message.channel.send(sayMessage);

    },
};