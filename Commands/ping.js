module.exports = {
	name: 'ping',
	description: 'Ping -> Pong! Also includes Ping Latency',
	execute(message) {
		message.channel.send('->Pong.');
	},
};