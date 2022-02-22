module.exports = {
	name: 'flipcoin',
	description: 'Flips a coin',
	execute(message) {
		const result = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
		return message.reply(`${result}`);

	},
};