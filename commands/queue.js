module.exports = {
	name: 'queue',
	description: 'View queue command!',
	async execute(message, args, ytdl, Discord, ops) {
		const fetched = ops.active.get(message.guild.id);

		if(!fetched) return message.channel.send('No music is playing');

		let queue = fetched.queue;
		let nowPlaying = queue[0];

		let response = `Now playing \n${nowPlaying.songTitle}`;

		for(let i = 1; i < queue.length; i++) {
			response += `\n${queue[i].songTitle}`;
		}

		message.channel.send(response);
	},
};