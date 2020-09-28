module.exports = {
    name:'target',
    description:'This is a target system for priority [Low] [Medium] [High], domain, and ip of a target',
    usage: '[Target #]  [Priority]  [Domain]  [IP]',
    args: true,
    execute(message, args){

     //User input -> var sayMessage
         const sayMessage = args.join(' ');

     //Checks and Places Priority Level'
        //List of each Arg
        const lowPy = ["Low","low","l","L"];
        const medPy = ["Medium","medium","med","Med","m","M"];
        const hiPy = ["High","high","h","H"];
        //Checks user input
        //Returns UNDEFINED if args dont match Arg List
        if (lowPy.some(word => sayMessage.includes(word))){
             var priority = 'Low'
        }
        else if (medPy.some(word=> sayMessage.includes(word))){
            var priority = 'Medium'
        }
        else if (hiPy.some(word=> sayMessage.includes(word))){
            var priority = 'High'
        }
     //Gets Target Number from sayMessage
        let numberGrab = /^[1-9][0-9]*/;
        let numberInfo = sayMessage.match(numberGrab);

     //Gets Domain from sayMessage
        let domainGrab = /\b((xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}\b/;
        let domainInfo = sayMessage.match(domainGrab)[0];

     //Gets IP from sayMessage
        let ipGrab = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/;
        let ipInfo = sayMessage.match(ipGrab);

     //Deletes Command Message
        message.delete();    
    
     //inside a command, event listener, etc.
        const targetBed = {
            color: 0x8B0000,
            title: `_Target:_   ${numberInfo}`,
            fields: [	
                { 
                    name: `_Priority:_   ${priority}`,
                    value: '\u200B',
                },
                {   
                    name:`_Domain:_   ${domainInfo}`,
                    value: '\u200B',
                },
                {
                    name:`_IP:_   ${ipInfo}`,
                    value: '\u200B',
                },
            ],
	        timestamp: new Date(),
        };

     //Send message in channel /w embed
        message.channel.send({ embed: targetBed });


    },//Execute Brace
};//Module Export Brace

