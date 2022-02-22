module.exports = {
	name: 'ping',
	description: 'this is a ping command!',
	async execute(message) {
		message.channel.send('Pong');
	},
};