module.exports = {
	name: 'reload',
	description: 'this is a reload command!',
	async execute(message, args, ytdl, Discord, ops, client) {


		if(message.author.id !== ops.ownerID) return message.channel.send('Only the owner can do this');
		try {
			console.log('working1');
			delete require.cache[require.resolve(`./${args[0]}.js`)];
			console.log('working2');
			const props = require(`./${args[0]}.js`);
			console.log('working3');
			message.client.commands.set(props.name, props);
			console.log('working4');
		}
		catch (e) {
			if(args[0] === undefined) {
				args[0] = ' ';
			}
			return message.channel.send(' Unable to reload `' + args[0] + '`').catch();
		}

		message.channel.send(`Reloaded: ${args[0]}`);


	},
};