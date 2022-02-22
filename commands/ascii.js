const ascii = require('ascii-art');

module.exports = {
	name: 'ascii',
	description: 'this is a ascii command!',
	args: true,
	async execute(message, args) {

		ascii.font(args.join(' '), 'Doom', function(err, rendered) {

			rendered = rendered.trimRight();

			if (rendered.length > 2000) return message.channel.send ('Message too long');

			message.channel.send(rendered, {
				code: 'md',
			});

		});
	},
};