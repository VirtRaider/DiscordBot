// const ytdl = require ('ytdl-core');

module.exports = {
	name: 'play',
	description: 'this is a play command!',
	args: true,
	async execute(message, args, ytdl, Discord, ops, client) {

		if (!message.member.voice.channel) return message.channel.send('Join the voice channel!');

		if (!args[0]) return message.channel.send('Use a url after the command');

		let urlValid = await ytdl.validateURL(args[0]);

		if (!urlValid) {

			const commandFile = require('./search.js');
			return commandFile.execute(message, args, ytdl, Discord, ops, client);
		}

		// if (!urlValid) return message.channel.send('Use a valid url');

		let info = await ytdl.getInfo(args[0]);

		let data = ops.active.get(message.guild.id) || {};
		if(data.connection) {
			data.connection = await message.member.voice.channel.join();
		}
		if(!data.connection) data.connection = await message.member.voice.channel.join();
		if (!data.queue) data.queue = [];
		data.guildID = message.guild.id;

		data.queue.push({
			songTitle: info.videoDetails.title,
			url: args[0],
		});

		if (!data.dispatcher) {
			play();
		}
		else{
			message.channel.send(`Added to queue: ${info.videoDetails.title}`);
		}

		ops.active.set(message.guild.id, data);

		async function play() {
			data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, { filter: 'audioonly' }));
			data.dispatcher.guildID = data.guildID;
			ops.active.set(message.guild.id, data);
			message.reply(`Now playing ${data.queue[0].songTitle}`);

			data.dispatcher.once('finish', function() {
				finish();
			});
		}
		function finish() {
			data.queue.shift();
			if(data.queue.length > 0) {
				ops.active.set(message.guild.id, data);
				play();
			}
			else {
				message.guild.me.voice.channel.leave();
				data.dispatcher.destroy();
				data.dispatcher = 0;
				ops.active.set(data);
			}
		}
	},
};

