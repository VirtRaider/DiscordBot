module.exports = {
	name: 'ttt',
	description: 'Plays TicTacToe!',
	async execute(message) {
		message.channel.send('| |\n| |\n| |');
		message.channel.send('↖️ ⬆️ ↗️\n⬅️ ⏺️ ➡️\n↙️ ⬇️ ↘️');
		message.channel.send('Player one is X player two is O');

	},
};