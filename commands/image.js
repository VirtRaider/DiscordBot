module.exports = {
	name: 'image',
	description: 'Posts an image',
	execute(message) {
		let url = null;
		if (url == null){
			url = 'https://r.sine.com/index';
		message.channel.send(url);
		} else {
			console.log(url)
		}
		
	},
};