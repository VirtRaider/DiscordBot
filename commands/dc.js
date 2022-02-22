module.exports = {
	name: 'dc',
	description: 'this is a leave channel command!',
	async execute(message, args, ytdl, Discord, ops) {

		if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel! Bitch');

		if (!message.guild.me.voice.channel) return message.channel.send('I am not in a voice channel!');

		if (message.guild.me.voice.channelID !== message.member.voice.channelID) return message.channel.send('We aren\'t in the same voice channel');

		const VoiceChannel = await message.member.voice.channel;

		VoiceChannel.leave();
		let data = ops.active.get(message.guild.id);
		message.guild.me.voice.channel.leave();
		data.dispatcher.destroy();
		data.queue = [];
		ops.active.set(data);
		if (!data.dispatcher) {
			console.log('dispatcher needs to');
		}
		message.channel.send('I will return soon');

	},
};