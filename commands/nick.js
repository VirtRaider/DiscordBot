module.exports = {
	name: 'nick',
	description: 'Changed Nickname',
	args: true,
	async execute(message, args) {
		let member = message.mentions.members.first();
		const nick = args.length > 1 ? args.slice(1).join(' ') : null;
		if (member) {
			member = await member.setNickname(nick).then(() =>{
				message.channel.guild.id, member.id, { nick };
				message.channel.send('Nickname changed.');
			}).catch(err => {
				console.error(err);
				return message.channel.send('Something went wrong when running this command!');
			});
		}
	},
};