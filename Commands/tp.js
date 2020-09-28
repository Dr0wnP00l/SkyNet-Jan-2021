module.exports = {
    name:'tp',
    description:'Give TP to a player',
    usage: '[user] ',
    execute(message){
    //Deletes Command Message
     message.delete();    
    
     const taggedUser = message.mentions.users.first();


     //inside a command, event listener, etc.
        const tpGimme = {
            color: 0xffd700,
            title: `${taggedUser.username.toUpperCase()}, GIVE ME ALL YOUR TP`,

            image:{
                url: 'https://i.imgur.com/xSFz2cN.png',
            },

        };

     //Send message in channel /w embed
        message.channel.send(taggedUser.username)
        message.channel.send({ embed: tpGimme });


    },//Execute Brace
};//Module Export Brace