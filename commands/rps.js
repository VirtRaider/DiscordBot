module.exports = {
	name: 'rps',
	description: 'rock paper scissors!',
	async execute(message, args) {

		const playerAction = args[0].toLowerCase().substring(0, 1);
		const compAction = Math.floor(Math.random() * 3);

		switch(compAction) {
		case 0:
			switch(playerAction) {
			case 'r':
				message.channel.send('Computer threw Rock. Its a tie');
				break;
			case 'p':
				message.channel.send('Computer threw Rock. Player Wins!!');
				break;
			case 's':
				message.channel.send('Computer threw Rock. Player loses');
				break;
			default:
				message.channel.send('Its Rock, Paper, Scissors how hard can this be!!!!');
			}
			break;
		case 1:
			switch(playerAction) {
			case 'r':
				message.channel.send('Computer threw Paper. Player Loses');
				break;
			case 'p':
				message.channel.send('Computer threw Paper. Its a tie');
				break;
			case 's':
				message.channel.send('Computer threw Paper. Player Wins!!');
				break;
			default:
				message.channel.send('Its Rock, Paper, Scissors how hard can this be!!!!');
			}
			break;
		case 2:
			switch(playerAction) {
			case 'r':
				message.channel.send('Computer threw Scissors. Player Wins!!');
				break;
			case 'p':
				message.channel.send('Computer threw Scissors. Player Loses');
				break;
			case 's':
				message.channel.send('Computer threw Scissors. Its a tie');
				break;
			default:
				message.channel.send('Its Rock, Paper, Scissors how hard can this be!!!!');
			}
			break;
		default:
			message.channel.send('This text should not appear');
			console.log();

		}

	},


};