module.exports = {
	name: 'dice',
	description: 'Rolls a dice',
	args: true,
	async execute(message, args) {
		let i = null;
		let sides = null;
		let rolls = null;
		sides = args[0];
		rolls = args[1];
		let total = 0;
		const resultArray = new Array();
		if(rolls > 10000000) {
			return message.channel.send('I don\'t have that many dice. I only have ten million...');
		}
		if(Math.floor(args[0]) != args[0]) {
			message.channel.send('Use a whole number!!!!!');
		}
		else
		if(rolls == null) {
			message.channel.send('You rolled a ' + (Math.ceil(Math.random() * sides)) + '!');
		}
		else
		if(sides > 1 && sides <= 100) {
			for(i = 0;rolls > i;i++) {
				const result = (Math.ceil(Math.random() * sides));
				total += result;
				resultArray[i] = result;
			}
			const resultString = resultArray.toString();
			// message.channel.send(resultString);
			if(resultString.length < 2000) {
				//	take resultarray split in 2 strings call resultarray 1 and 2 message.channel.send(resultarray1)
				//	message.channel.send(resultarray2)
				message.channel.send(resultArray.toString());
			}
			return message.channel.send('The total of ' + rolls + ' dice is ' + total + '!');

		}

	},
};