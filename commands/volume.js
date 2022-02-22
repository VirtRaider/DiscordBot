module.exports = {
	name: 'volume',
	description: 'this is a volume command!',
	args: true,
	async execute(message, args, ytdl, Discord, ops) {

		const fetched = ops.active.get(message.guild.id);

		if (!fetched) return message.channel.send('No music is playing');

		if (message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('You arent in the same channel');

		if(isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Input a number between 0-200');

		fetched.dispatcher.setVolume(args[0] / 100);

		message.channel.send(`Successfully set the volume of ${fetched.queue[0].songTitle} to ${args[0]}`);

	},


};