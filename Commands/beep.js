module.exports = {
	name: 'beep',
	description: 'Beep -> Boop!',
	usage: "*beep",
	execute(message) {
		message.channel.send('->Boop!');
	},
};