const ytdl = require('ytdl-core');
const search = require('yt-search');
module.exports = {
	name: 'search',
	description: 'Plays a link based on keyword search',
	args: true,
	async execute(message, args, ytdl, Discord, ops, client) {
		search(args.join(' '), function(err, res) {
			if (err) {
				return message.channel.send('Sorry, something went wrong.');
			}
			const videos = res.videos.slice(0, 10);
			let resp = '';
			for (const i in videos) {
				resp += `[${parseInt(i) + 1}]: ${videos[i].title}\`\n`;
			}
			resp += `\nChoose a number between \`1-${videos.length}\``;

			message.channel.send(resp);

			const filter = m => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;
			const collector = message.channel.createMessageCollector(filter);
			collector.videos = videos;
			collector.once('collect', async function(m) {
				let commandFile = require('./play.js');
				commandFile.execute(message, [this.videos[parseInt(m.content) - 1].url], ytdl, Discord, ops, client);
			});
		});
	},
};