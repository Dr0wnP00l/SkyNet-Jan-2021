
module.exports = {
    name: 'poll',
    description: 'start a poll, and count votes at the end',
    usage: '[poll topic]',
    args: true,
    async execute (message, args ) {
        const agree = '👍'
        const disagree = '👎'
        const sayMessage = args.join(' ');
        message.delete();
      let msg =  await message.channel.send(sayMessage);
            await  message.react(agree);
            await  message.react(disagree);
        const reactions =  await message.awaitReactions(reaction => reaction.emoji.name == agree || reaction.emoji.name == disagree, { time: 15000 });
        message.channel.send(`Poll complete!\n\n${agree}: ${reactions.get(agree).count - 1}\n${disagree}: ${reactions.get(disagree).count - 1}`);

    },
};