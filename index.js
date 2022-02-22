const Discord = require('discord.js');
const client = new Discord.Client();
const {words} = require('./BannedWords.json');

const { prefix, token } = require('./config.json');
const ownerID = '168344165086658561';
const active = new Map();
const ytdl = require('ytdl-core');
const fs = require('fs');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));

for(const file of commandFiles) {

	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


client.once('ready', ()=> {
	console.log('The Police have arrived');
});
client.once('reconnecting', () => {
	console.log('Reconnecting!');
});
client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', message => {

	let foundInText = false;
	for(const i in words) {
		if(message.content.toLowerCase().includes(words[i])) foundInText = true;
	}
	if(foundInText) {
		message.delete();
		message.channel.send('Word is in the banned list');
	}

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	if(!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);
	if(command.args && !args.length) {
		return message.channel.send(`You didnt provide any arguments, ${message.author}!`);
	}
	if(!client.commands.has(commandName)) return;
	try{

		const ops = {
			ownerID: ownerID,
			active: active,
		};
		command.execute(message, args, ytdl, Discord, ops, client);
	}
	catch(error) {
		console.error(error);
		message.reply('Error with command');
	}
});


client.login(token);
